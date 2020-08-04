import { ResumeEntity } from '../entities/ResumeEntity';

export const add = async (resumeDTO) => {
    try {
        let newResume = new ResumeEntity(); newResume.user_id = resumeDTO.user_id;
        newResume.title = resumeDTO.title;
        newResume.description = resumeDTO.description;
        const createdResume = await newResume.save();
        return createdResume;
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        let detailResume = await ResumeEntity.findById(id);
        return detailResume;
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        let removedResume = await ResumeEntity.findByIdAndRemove(id);
        return removedResume;
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, resumeDTO) => {
    try {
        let updateResume = await ResumeEntity.findById(id);

        if (isNullOrUndefined(updateResume))
            return null;


        updateResume.title = resumeDTO.title;
        updateResume.description = resumeDTO.description;
        return await updateResume.save();
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        let detailResume = await ResumeEntity.find({
            user_id: userId
        });
        return detailResume;
    } catch (err) {
        throw err;
    }
}
