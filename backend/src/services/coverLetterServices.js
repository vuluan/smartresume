import * as coverLetterRepositories from '../repositories/coverLetterRepositories';

export const add = async (coverLetterDTO) => {
    try {
        return await coverLetterRepositories.add(coverLetterDTO);
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        return await coverLetterRepositories.detail(id);
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        return await coverLetterRepositories.deleteById(id);
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, coverLetterDTO) => {
    try {
        return await coverLetterRepositories.updateById(id, coverLetterDTO);
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        return await coverLetterRepositories.findByUserId(userId);
    } catch (err) {
        throw err;
    }
}