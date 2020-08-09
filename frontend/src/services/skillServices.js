import axios, { HOST } from "../utils/httpUtilities";

const GET_SKILLS_ENDPOINT = `${HOST}/skill/list`;
const DELETE_SKILLS_ENDPOINT = `${HOST}/skill`;
const ADD_SKILLS_ENDPOINT = `${HOST}/skill/add`;
const DETAIL_SKILLS_ENDPOINT = `${HOST}/skill`;
const UPDATE_SKILLS_ENDPOINT = `${HOST}/skill`;

export function getAllSkills(payload) {
    return axios.get(`${GET_SKILLS_ENDPOINT}/${payload.userId}`);
}

export function deleteSkll(skillId) {
    return axios.delete(`${DELETE_SKILLS_ENDPOINT}`, { 
        data: {
            id: skillId
        }
    });
}

export function addSkill(payload) {
    return axios.post(`${ADD_SKILLS_ENDPOINT}`, payload);
}

export function detailSkill(skillId) {
    return axios.get(`${DETAIL_SKILLS_ENDPOINT}/${skillId}`);
}

export function updateSkill(payload) {
    return axios.put(`${UPDATE_SKILLS_ENDPOINT}`, payload);
}