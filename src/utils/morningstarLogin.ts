import * as requestPromise from "request-promise";
import { Cookie } from "request-cookies";
import * as tough from "tough-cookie";
import { logger } from "../utils";

const MORNINGSTAR_EMAIL = process.env.MORNINGSTAR_EMAIL;
const MORNINGSTAR_PASSWORD = process.env.MORNINGSTAR_PASSWORD;

export async function loginToMorningstar() {
	logger.info(">>>>>>>>>>>>>>>>>> Logging in to M* Pending...");
	let cookiejar = requestPromise.jar();
	const options = {
		method: 'POST',
		resolveWithFullResponse: true,
		uri: 'http://edw.morningstar.com/login.aspx',
		// proxy: 'http://127.0.0.1:8888', // used for Charles proxy for debugging - leave commented
		form: {
			"email": "fundworks@morningstar.com",
			"password": "fw1234",
		},
		gzip: true,
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		}
	};

	let receivedCookies;
	try {
		const response = await requestPromise(options); // this returns a 302 so for some reason it is handled as an error...
	} catch (e) {
		// Because of 302 we handle the response in here...
		// Turn these logs on if you want to see what cookies came back
		// console.log('Cookies received', e.response.headers['set-cookie']);
		// console.log('Status Code', e.response.statusCode);
		// console.log('Status Message', e.response.statusMessage);
		// Set the received cookies so we can use in the data request.
		receivedCookies = e.response.headers['set-cookie'];
	}
	// Cookie Jar stores cookies for outgoing requests
	for (let receivedCookie of receivedCookies) {
		const cookie = new Cookie(receivedCookie);
		const cookieToSet = new tough.Cookie({
			key: cookie.key,
			value: cookie.value,
			domain: 'edw.morningstar.com',
			httpOnly: true
		});
		cookiejar.setCookie(cookieToSet, 'http://edw.morningstar.com');
	}

	logger.info(">>>>>>>>>>>>>>>>>> Logging in to M* Success!!");
	return cookiejar;
}