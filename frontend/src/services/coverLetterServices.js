import axios, { HOST } from "../utils/httpUtilities";

const GET_COVERLETTER_ENDPOINT = `${HOST}/coverletter/list`;
const DELETE_COVERLETTER_ENDPOINT = `${HOST}/coverletter`;
const ADD_COVERLETTER_ENDPOINT = `${HOST}/coverletter/add`;
const DETAIL_COVERLETTER_ENDPOINT = `${HOST}/coverletter`;
const UPDATE_COVERLETTER_ENDPOINT = `${HOST}/coverletter`;

export function getAllCoverLetters(payload) {
    return axios.get(`${GET_COVERLETTER_ENDPOINT}/${payload.userId}`);
}

export function deleteCoverLetter(coverLetterId) {
    return axios.delete(`${DELETE_COVERLETTER_ENDPOINT}`, { 
        data: {
            id: coverLetterId
        }
    });
}

export function addCoverLetter(payload) {
    return axios.post(`${ADD_COVERLETTER_ENDPOINT}`, payload);
}

export function detailCoverLetter(coverLetterId) {
    return axios.get(`${DETAIL_COVERLETTER_ENDPOINT}/${coverLetterId}`);
}

export function updateCoverLetter(payload) {
    return axios.put(`${UPDATE_COVERLETTER_ENDPOINT}`, payload);
}