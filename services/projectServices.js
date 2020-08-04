import * as projectRepositories from '../repositories/projectRepositories';

export const add = async (projectDTO) => {
    try {
        return await projectRepositories.add(projectDTO);
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        return await projectRepositories.detail(id);
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        return await projectRepositories.deleteById(id);
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, projectDTO) => {
    try {
        return await projectRepositories.updateById(id, projectDTO);
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        return await projectRepositories.findByUserId(userId);
    } catch (err) {
        throw err;
    }
}