import { LOADER_CONFIG, IManifest } from "@kurtosys/udm_data_toolkit";
import { isNullOrWhitespace, safe } from "../utils";
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
        url = `${baseUrl}${urlSuffix}`
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

export async function callApi(manifestItem: IManifest, requestBody: {} = {}, urlParameters: {} = {}, requestHeaders: {} = {}) {
    return new Promise((resolve, reject) => {
        let { apiOptions } = manifestItem;
        if (!apiOptions) {
            throw new Error("No apiOptions key found in manifestItem");
        }

        let { externalApi } = LOADER_CONFIG["originalConfig"];
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
        console.log("callApi url: ", url);
        let auth;
        if (targetApi.username && targetApi.password) {
            auth = {
                username: targetApi.username,
                password: targetApi.password
            };
        }
        let pfx, passphrase, securityOptions;
        if (targetApi.certificateName) {
            console.log(process.cwd());
            pfx = getCertificateContent(targetApi.certificateName);
            passphrase = targetApi.certificatePassphrase;
            securityOptions = 'SSL_OP_NO_SSLv3';
        }

        let response = request({
            url,
            method,
            headers,
            body: JSON.stringify(body),
            auth,
            pfx,
            passphrase,
            securityOptions
        }, (error, response, body) => {
            if (error) {
                console.error(`Error on api call to ${url}, with message: ${error}`);
                resolve();
            }
            else {
                body = loadDeepLinks(targetApi, manifestItem, JSON.parse(body));
                resolve(body);

            }
        });
    });
}

export async function loadDeepLinks(targetApi, manifestItem: IManifest, body: {}) {
    let { deepLinks } = manifestItem.apiOptions;
    console.log('deepLinks', deepLinks);
    if (deepLinks) {
        await ingestDeepLinks(manifestItem, deepLinks, body);
    }
    return body;
}

async function ingestDeepLinks(manifestItem: IManifest, deepLinks, body: {}) {        
    const DEEP_LINK_API_OPTIONS_KEY = "_deepLinkApiOptions";
    const deepLinkExplicitKeys = [DEEP_LINK_API_OPTIONS_KEY];
    for (let deepLinkKey of Object.keys(deepLinks)) {        
        let deepLinkObject = deepLinks[deepLinkKey] || {};
        let deepLinkApiOptions = safe(() => deepLinkObject[DEEP_LINK_API_OPTIONS_KEY], false);        
        if (body && body[deepLinkKey]) {
            if (deepLinkApiOptions) {
                deepLinkApiOptions = typeof deepLinkApiOptions !== "object" ? {} : deepLinkApiOptions;
                let childManifestItem = Object.assign({}, manifestItem);
                childManifestItem.apiOptions = Object.assign({}, childManifestItem.apiOptions, deepLinkApiOptions, { "url": body[deepLinkKey], "deepLinks": deepLinkObject });
                let childRequestBody = deepLinkApiOptions.requestBody || {};
                let childUrlParameters = deepLinkApiOptions.urlParameters || {};
                let childRequestHeaders = deepLinkApiOptions.requestHeaders || {};
                body[deepLinkKey] = await callApi(childManifestItem, childRequestBody, childUrlParameters, childRequestHeaders);
            }
            else {
                let objectsToLoad = [];
                if (!Array.isArray(body[deepLinkKey])) {
                    objectsToLoad.push(body[deepLinkKey]);
                }
                else {
                    objectsToLoad = body[deepLinkKey];
                }
                for (let objectToLoad of objectsToLoad) {
                    let childManifestItem = Object.assign({}, manifestItem);
                    childManifestItem.apiOptions = Object.assign({}, childManifestItem.apiOptions, { "deepLinks": deepLinkObject });
                    await ingestDeepLinks(childManifestItem, deepLinkObject, objectToLoad);
                }
            }
        }
    }    
} 
