import * as jobprofileRepositories from '../repositories/jobprofileRepositories';

export const add = async (jobprofileDTO) => {
    try {
        return await jobprofileRepositories.add(jobprofileDTO);
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        return await jobprofileRepositories.detail(id);
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        return await jobprofileRepositories.deleteById(id);
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, jobprofileDTO) => {
    try {
        return await jobprofileRepositories.updateById(id, jobprofileDTO);
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        return await jobprofileRepositories.findByUserId(userId);
    } catch (err) {
        throw err;
    }
}
