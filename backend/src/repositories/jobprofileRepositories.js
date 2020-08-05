import { JobprofileEntity } from '../entities/JobprofileEntity';
import { isNullOrUndefined } from '../shared/utils/generalUtilities';

export const add = async (jobprofileDTO) => {
    try {
        let newJobprofile = new JobprofileEntity(); newJobprofile.user_id = jobprofileDTO.user_id;
        newJobprofile.profile = jobprofileDTO.profile;
        const createdJobprofile = await newJobprofile.save();
        return createdJobprofile;
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        let detailJobprofile = await JobprofileEntity.findById(id);
        return detailJobprofile;
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        let removedJobprofile = await JobprofileEntity.findByIdAndRemove(id);
        return removedJobprofile;
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, jobprofileDTO) => {
    try {
        let updateJobprofile = await JobprofileEntity.findById(id);

        if (isNullOrUndefined(updateJobprofile))
            return null;

        updateJobprofile.profile = jobprofileDTO.profile;
        return await updateJobprofile.save();
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        let detailJobprofile = await JobprofileEntity.find({
            user_id: userId
        });
        return detailJobprofile;
    } catch (err) {
        throw err;
    }
}
