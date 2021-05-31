import axios from "axios";

const appAxios = axios.create({
	baseURL: 'http://10.16.15.90:5703/',
	withCredentials: false,
});

appAxios.interceptors.request.use((config) => {
	const method = config.method.toUpperCase();
	if (method !== "OPTIONS") {
		config.headers = {
			"Content-Type": "application/json",
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': 'true',

		};
	}
	return config;
});


export { appAxios };