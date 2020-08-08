import axios, { HOST } from "../utils/httpUtilities";

const GET_LANGUAGES_ENDPOINT = `${HOST}/language/list`;
const DELETE_LANGUAGES_ENDPOINT = `${HOST}/language`;
const ADD_LANGUAGES_ENDPOINT = `${HOST}/language/add`;
const DETAIL_LANGUAGES_ENDPOINT = `${HOST}/language`;
const UPDATE_LANGUAGES_ENDPOINT = `${HOST}/language`;

export function getAllLanguages(payload) {
    return axios.get(`${GET_LANGUAGES_ENDPOINT}/${payload.userId}`);
}

export function deleteLanguage(languageId) {
    return axios.delete(`${DELETE_LANGUAGES_ENDPOINT}`, { 
        data: {
            id: languageId
        }
    });
}

export function addLanguage(payload) {
    return axios.post(`${ADD_LANGUAGES_ENDPOINT}`, payload);
}

export function detailLanguage(languageId) {
    return axios.get(`${DETAIL_LANGUAGES_ENDPOINT}/${languageId}`);
}

export function updateLanguage(payload) {
    return axios.put(`${UPDATE_LANGUAGES_ENDPOINT}`, payload);
}