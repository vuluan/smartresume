import * as languageRepositories from '../repositories/languageRepositories';

export const add = async (languageDTO) => {
    try {
        return await languageRepositories.add(languageDTO);
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        return await languageRepositories.detail(id);
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        return await languageRepositories.deleteById(id);
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, languageDTO) => {
    try {
        return await languageRepositories.updateById(id, languageDTO);
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        return await languageRepositories.findByUserId(userId);
    } catch (err) {
        throw err;
    }
}