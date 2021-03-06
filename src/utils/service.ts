import { LOADER_CONFIG, IManifest } from "@kurtosys/udm_data_toolkit";
import { isNullOrWhitespace, safe, deepCopy, validateJSONSchema, addException, colorText, FONT_COLORS, logger, loginToMorningstar } from "../utils";
import { IApiRequestOptions, IApiManifest, IApiOptionsItems, IOriginalLoaderConfig} from "../models";
import * as request from "request";
import * as fs from "fs";
import * as path from "path";

// This will generate a url for the call api function
export function getUrl(baseUrl: string = "", urlSuffix: string = "", parameters: any = {}) {
    let url = "";
    urlSuffix = urlSuffix || "";
    baseUrl = baseUrl || "";

    if (urlSuffix.startsWith("http")) {
        url = urlSuffix;
    }
    else if (!isNullOrWhitespace(baseUrl)) {
        if (!baseUrl.endsWith("/")) {
            baseUrl += "/";
        }
        if (urlSuffix.startsWith("/")) {
            urlSuffix = urlSuffix.substr(1);
        }
        url = `${baseUrl}${urlSuffix}`;
    }
    if (!url) {
        return "";
    }
    Object.keys(parameters).map(parameter => {
        let pattern = new RegExp(`\\{${parameter}\\}`, 'g');
        url = url.replace(pattern, parameters[parameter]);
    });
    return url;
}

export function getCertificateContent(certificateName: string): string {
    let content = safe(() => LOADER_CONFIG["originalConfig"]["certificateCache"][certificateName], null);
    if (!content) {
        content = fs.readFileSync(path.join('artifacts/config/certificates', certificateName));
        if (LOADER_CONFIG["originalConfig"]) {
            if (!LOADER_CONFIG["originalConfig"]["certificateCache"]) {
                LOADER_CONFIG["originalConfig"]["certificateCache"] = {};
            }
            LOADER_CONFIG["originalConfig"]["certificateCache"][certificateName] = content;
        }
    }
    return content;
}

export async function callApi(manifestItem: IApiManifest, options: IApiRequestOptions = {}, isMorningstarCall:boolean = false) {
    return new Promise(async (resolve, reject) => {
        let { requestBody, urlParameters, requestHeaders } = options;

        if (options.passRequestBodyToDeepLinks) {
            options.parentRequestBody = requestBody;
        }
        if (options.passUrlParametersToDeepLinks) {
            options.parentUrlParameters = urlParameters;
        }
        if (options.passRequestHeadersToDeepLinks) {
            options.parentRequestHeaders = requestHeaders;
        }

        let { apiOptions } = manifestItem;
        if (!apiOptions) {
            throw new Error("No apiOptions key found in manifestItem");
        }

        let { externalApi } = LOADER_CONFIG["originalConfig"] as IOriginalLoaderConfig;
        if (!externalApi) {
            throw new Error("No externalApi key found in loaderConfig");
        }

        let targetApi = externalApi[apiOptions.type];
        let url = getUrl(targetApi.baseUrl, apiOptions.url, urlParameters);
        let { body, method } = apiOptions;
        if (!method) {
            method = "GET";
        }
        if (!body) {
            body = {};
        }
        body = Object.assign({}, body, requestBody);
        let { headers } = targetApi;
        if (!headers) {
            headers = {};
        }
        headers = Object.assign({}, headers, requestHeaders);
        console.log(`${colorText(FONT_COLORS.yellow, 'callApi')} url: `, url);
        let auth;
        if (targetApi.username && targetApi.password) {
            auth = {
                username: targetApi.username,
                password: targetApi.password
            };
        }
        let pfx, passphrase, securityOptions;
        if (targetApi.certificateName) {
            pfx = getCertificateContent(targetApi.certificateName);
            passphrase = targetApi.certificatePassphrase;
            securityOptions = 'SSL_OP_NO_SSLv3';
        }

        let requestObj = {
            url,
            method,
            headers,
            body: JSON.stringify(body),
            auth,
            pfx,
            passphrase,
            securityOptions,
            jar: undefined
        };

        if (isMorningstarCall) {
            requestObj.jar = await loginToMorningstar();
            logger.debug(">>>>>>>>>>>>>>>>>> Requesting M* data after login.");
        }

        let dataResponse = request(requestObj, (error, response, data) => {
            if (error) {
                console.error(`Error on api call to ${url}, with message: ${error}`);
                addException({
                    message: `Error on api call to ${url}, with message: ${error}`,
                    description: error,
                    apiDetails: {
                        method: method,
                        url: url,
                        requestBody: JSON.stringify(data)
                    }
                });
                resolve();
            }
            else {
                let responseBody = options.dontParseBodyAsJson ? data : JSON.parse(data);
                if (!options.dontParseBodyAsJson && manifestItem.apiOptions.schema) {
                    let schema = getSchema(manifestItem.apiOptions.schema);
                    let validationResponse = validateJSONSchema(responseBody, schema);
                    if (validationResponse.errors.length > 0) {
                        addException({
                            message: "Invalid JSON response from API Call.",
                            apiDetails: {
                                expectedSchema: schema,
                                schemaValidationResponse: JSON.stringify(validationResponse),
                                method: method,
                                url: url,
                                response: JSON.stringify(responseBody)
                            }
                        });
                        data = undefined;
                    }
                    else {
                        data = loadDeepLinks(targetApi, manifestItem, responseBody, options);
                    }
                    console.log('validationResponse', validationResponse);
                }
                else {
                    data = loadDeepLinks(targetApi, manifestItem, responseBody, options);
                }

                resolve(data);
            }
        });
    });
}

const SCHEMA_STORE = {};

export function getSchema(schemaName: string) {
    if (!SCHEMA_STORE[schemaName]) {
        let filePath = path.resolve('../../artifacts/config/schema/' + schemaName);
        let fileContent = fs.readFileSync(filePath);
        SCHEMA_STORE[schemaName] = fileContent;
    }
    return SCHEMA_STORE[schemaName];
}

export async function loadDeepLinks(targetApi, manifestItem: IApiManifest, body: {}, apiRequestOptions: IApiRequestOptions) {
    let { deepLinks } = manifestItem.apiOptions;

    if (deepLinks) {
        if (Array.isArray(body)) {
            for (let element of body) {
                await ingestDeepLinks(manifestItem, deepLinks, element, apiRequestOptions);
            }
        }
        else {
            await ingestDeepLinks(manifestItem, deepLinks, body, apiRequestOptions);
        }
    }
    return body;
}

/**
 *
 *
 * @param {IManifest} manifestItem
 * @param {any} deepLinks
 * @param {{}} body
 */
async function ingestDeepLinks(manifestItem: IApiManifest, deepLinks, body: {}, apiRequestOptions: IApiRequestOptions) {
    const DEEP_LINK_API_OPTIONS_KEY = "_deepLinkApiOptions";
    const deepLinkExplicitKeys = [DEEP_LINK_API_OPTIONS_KEY];
    for (let deepLinkKey of Object.keys(deepLinks)) {
        let deepLinkObject = deepLinks[deepLinkKey] || {};
        let deepLinkApiOptions = <IApiRequestOptions>safe(() => deepLinkObject[DEEP_LINK_API_OPTIONS_KEY], false);
        if (body && body[deepLinkKey]) {
            if (deepLinkApiOptions) {
                deepLinkApiOptions = typeof deepLinkApiOptions !== "object" ? {} : deepLinkApiOptions;
                let childManifestItem = Object.assign({}, manifestItem);
                childManifestItem.apiOptions = Object.assign({}, childManifestItem.apiOptions, deepLinkApiOptions, { "url": body[deepLinkKey], "deepLinks": deepLinkObject });
                let childRequestBody = deepLinkApiOptions.requestBody || {};
                let childUrlParameters = deepLinkApiOptions.urlParameters || {};
                let childRequestHeaders = deepLinkApiOptions.requestHeaders || {};

                let parentOptions = deepCopy(apiRequestOptions);
                let attributesToKeepFromParentOptions = ["parentRequestBody", "parentRequestHeaders", "parentUrlParameters"];
                for (let key of Object.keys(parentOptions)) {
                    if (attributesToKeepFromParentOptions.indexOf(key) === -1) {
                        delete parentOptions[key];
                    }
                }
                // Use the parent api request options to override the child deep link api options
                let options = <IApiRequestOptions>Object.assign({}, deepCopy(deepLinkApiOptions), parentOptions);
                body[deepLinkKey] = await callApi(childManifestItem, options);
            }
            else {
                let objectsToLoad = [];
                if (!Array.isArray(body[deepLinkKey])) {
                    objectsToLoad.push(body[deepLinkKey]);
                }
                else {
                    objectsToLoad = body[deepLinkKey];
                }
                let deepLinkPromises = [];
                for (let objectToLoad of objectsToLoad) {
                    let childManifestItem = Object.assign({}, manifestItem);
                    childManifestItem.apiOptions = Object.assign({}, childManifestItem.apiOptions, { "deepLinks": deepLinkObject });
                    deepLinkPromises.push(ingestDeepLinks(childManifestItem, deepLinkObject, objectToLoad, apiRequestOptions));
                }
                await Promise.all(deepLinkPromises);
            }
        }
    }
}
