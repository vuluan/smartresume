import axios from "axios";
import LocalStorageService from './localStorage';
import { createBrowserHistory } from "history";

const axios_auth = axios.create();
const history = createBrowserHistory();

axios_auth.interceptors.request.use(
    config => {
        alert('interceptor request triggered');
        const token = LocalStorageService.getAccessToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

axios_auth.interceptors.response.use((response) => {
    if (response.status === 401) {
        history.push('/login');
    }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }

    return Promise.reject(error.message)
});

export default axios_auth;