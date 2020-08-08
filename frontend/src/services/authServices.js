import axios from "../utils/httpUtilities";
import 'dotenv/config';
import LocalStorageService from './../utils/localStorage';

const HOST = process.env.REACT_APP_API_HOST || 'http://localhost:5000/api'
const LOGIN_ENDPOINT = `${HOST}/auth/login`;
const REGISTER_ENDPOINT = `${HOST}/auth/register`;

export function login(payload) {
    return axios.post(LOGIN_ENDPOINT, payload);
}


export function register(payload) {
    return axios.post(REGISTER_ENDPOINT, payload);
}

export function isLogin() {
    return LocalStorageService.getUserInfo() != null;
}