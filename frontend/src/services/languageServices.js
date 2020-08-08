import axios, { HOST } from "../utils/httpUtilities";

const GET_LANGUAGES_ENDPOINT = `${HOST}/language/list`;
const DELETE_LANGUAGES_ENDPOINT = `${HOST}/language`;

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
