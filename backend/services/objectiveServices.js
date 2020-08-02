
import * as objectiveRepositories from '../repositories/objectiveRepositories';

export const add = async (objectiveDTO) => {
    try {
        return await objectiveRepositories.add(objectiveDTO);
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        return await objectiveRepositories.detail(id);
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        return await objectiveRepositories.deleteById(id);
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, objectiveDTO) => {
    try {
        return await objectiveRepositories.updateById(id, objectiveDTO);
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        return await objectiveRepositories.findByUserId(userId);
    } catch (err) {
        throw err;
    }
}
