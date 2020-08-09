import axios, { HOST } from "../utils/httpUtilities";

const GET_BASICINFO_ENDPOINT = `${HOST}/basicinfo/list`;
const DELETE_BASICINFO_ENDPOINT = `${HOST}/basicinfo`;
const ADD_BASICINFO_ENDPOINT = `${HOST}/basicinfo/add`;
const DETAIL_BASICINFO_ENDPOINT = `${HOST}/basicinfo`;
const UPDATE_BASICINFO_ENDPOINT = `${HOST}/basicinfo`;

export function getAllBasicInfos(payload) {
    return axios.get(`${GET_BASICINFO_ENDPOINT}/${payload.userId}`);
}

export function deleteBasicInfo(basicinfoId) {
    return axios.delete(`${DELETE_BASICINFO_ENDPOINT}`, { 
        data: {
            id: basicinfoId
        }
    });
}

export function addBasicInfo(payload) {
    return axios.post(`${ADD_BASICINFO_ENDPOINT}`, payload);
}

export function detailBasicInfo(basicinfoId) {
    return axios.get(`${DETAIL_BASICINFO_ENDPOINT}/${basicinfoId}`);
}

export function updateBasicInfo(payload) {
    return axios.put(`${UPDATE_BASICINFO_ENDPOINT}`, payload);
}