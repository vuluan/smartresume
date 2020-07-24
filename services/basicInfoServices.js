import * as basicInfoRepositories from '../repositories/basicInfoRepositories';

export const add = async (basicInfoDTO) => {
    try {
        return await basicInfoRepositories.add(basicInfoDTO);
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        return await basicInfoRepositories.detail(id);
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        return await basicInfoRepositories.deleteById(id);
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, basicInfoDTO) => {
    try {
        return await basicInfoRepositories.updateById(id, basicInfoDTO);
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        return await basicInfoRepositories.findByUserId(userId);
    } catch (err) {
        throw err;
    }
}