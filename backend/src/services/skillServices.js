import * as skillRepositories from '../repositories/skillRepositories';

export const add = async (skillDTO) => {
    try {
        return await skillRepositories.add(skillDTO);
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        return await skillRepositories.deleteById(id);
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, skillDTO) => {
    try {
        return await skillRepositories.updateById(id, skillDTO);
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        return await skillRepositories.findByUserId(userId);
    } catch (err) {
        throw err;
    }
}