
import * as resumeRepositories from '../repositories/resumeRepositories';

export const add = async (resumeDTO) => {
    try {
        return await resumeRepositories.add(resumeDTO);
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        return await resumeRepositories.detail(id);
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        return await resumeRepositories.deleteById(id);
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, resumeDTO) => {
    try {
        return await resumeRepositories.updateById(id, resumeDTO);
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        return await resumeRepositories.findByUserId(userId);
    } catch (err) {
        throw err;
    }
}
