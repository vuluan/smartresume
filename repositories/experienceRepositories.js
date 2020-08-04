import { ExperienceEntity } from '../entities/ExperienceEntity';

export const add = async (experienceDTO) => {
    try {
        let newExperience = new ExperienceEntity();
        newExperience.user_id = experienceDTO.user_id;
        newExperience.title = experienceDTO.title;
        newExperience.type = experienceDTO.type;
        newExperience.company = experienceDTO.company;
        newExperience.location = experienceDTO.location;
        newExperience.start_date = experienceDTO.start_date;
        newExperience.end_date = experienceDTO.end_date;
        newExperience.description = experienceDTO.description;
        const createdExperience = await newExperience.save();
        return createdExperience;
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        let detailExperience = await ExperienceEntity.findById(id);
        return detailExperience;
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        let removedExperience = await ExperienceEntity.findByIdAndRemove(id);
        return removedExperience;
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, experienceDTO) => {
    try {
        let updateExperience = await ExperienceEntity.findById(id);

        if (isNullOrUndefined(updateExperience))
            return null;

        updateExperience.title = experienceDTO.title;
        updateExperience.type = experienceDTO.type;
        updateExperience.company = experienceDTO.company;
        updateExperience.location = experienceDTO.location;
        updateExperience.start_date = experienceDTO.start_date;
        updateExperience.end_date = experienceDTO.end_date;
        updateExperience.description = experienceDTO.description;
        return await updateExperience.save();
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        let detailExperience = await ExperienceEntity.find({
            user_id: userId
        });
        return detailExperience;
    } catch (err) {
        throw err;
    }
}

