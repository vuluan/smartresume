import axios, { HOST } from "../utils/httpUtilities";

const GET_EXPERIENCE_ENDPOINT = `${HOST}/experience/list`;
const DELETE_EXPERIENCE_ENDPOINT = `${HOST}/experience`;
const ADD_EXPERIENCE_ENDPOINT = `${HOST}/experience/add`;
const DETAIL_EXPERIENCE_ENDPOINT = `${HOST}/experience`;
const UPDATE_EXPERIENCE_ENDPOINT = `${HOST}/experience`;

export function getAllExperiences(payload) {
    return axios.get(`${GET_EXPERIENCE_ENDPOINT}/${payload.userId}`);
}

export function deleteExperience(experienceId) {
    return axios.delete(`${DELETE_EXPERIENCE_ENDPOINT}`, { 
        data: {
            id: experienceId
        }
    });
}

export function addExperience(payload) {
    return axios.post(`${ADD_EXPERIENCE_ENDPOINT}`, payload);
}

export function detailExperience(experienceId) {
    return axios.get(`${DETAIL_EXPERIENCE_ENDPOINT}/${experienceId}`);
}

export function updateExperience(payload) {
    return axios.put(`${UPDATE_EXPERIENCE_ENDPOINT}`, payload);
}