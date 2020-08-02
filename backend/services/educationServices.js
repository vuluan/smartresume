
import * as educationRepositories from '../repositories/educationRepositories';

export const add = async (educationDTO) => {
    try {
        return await educationRepositories.add(educationDTO);
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        return await educationRepositories.detail(id);
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        return await educationRepositories.deleteById(id);
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, educationDTO) => {
    try {
        return await educationRepositories.updateById(id, educationDTO);
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        return await educationRepositories.findByUserId(userId);
    } catch (err) {
        throw err;
    }
}
