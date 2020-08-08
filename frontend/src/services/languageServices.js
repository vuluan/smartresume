import axios, { HOST } from "../utils/httpUtilities";

const GET_LANGUAGES_ENDPOINT = `${HOST}/language/list`;

export function getAllLanguages(payload) {
    return axios.get(`${GET_LANGUAGES_ENDPOINT}/${payload.userId}`);
}
