import * as experienceRepositories from '../repositories/experienceRepositories';

export const add = async (experienceDTO) => {
    try {
        return await experienceRepositories.add(experienceDTO);
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        return await experienceRepositories.detail(id);
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        return await experienceRepositories.deleteById(id);
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, experienceDTO) => {
    try {
        return await experienceRepositories.updateById(id, experienceDTO);
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        return await experienceRepositories.findByUserId(userId);
    } catch (err) {
        throw err;
    }
}