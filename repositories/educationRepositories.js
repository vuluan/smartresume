import { EducationEntity} from '../entities/EducationEntity';

export const add = async (educationDTO) => {
    try {
        let newEducation = new EducationEntity();newEducation.user_id = educationDTO.user_id; 
        newEducation.school = educationDTO.school; 
        newEducation.degree = educationDTO.degree; 
        newEducation.field = educationDTO.field; 
        newEducation.start = educationDTO.start; 
        newEducation.finish = educationDTO.finish; 
        const createdEducation = await newEducation.save();
    return createdEducation;
} catch (err) {
    throw err;
}
}

export const detail = async (id) => {
    try {
        let detailEducation = await EducationEntity.findById(id);
        return detailEducation;
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        let removedEducation = await EducationEntity.findByIdAndRemove(id);
        return removedEducation;
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, educationDTO) => {
    try {
        let updateEducation = await EducationEntity.findById(id);
updateEducation.school = educationDTO.school; 
            updateEducation.degree = educationDTO.degree; 
            updateEducation.field = educationDTO.field; 
            updateEducation.start = educationDTO.start; 
            updateEducation.finish = educationDTO.finish; 
             return await updateEducation.save();
} catch (err) {
    throw err;
}
}

export const findByUserId = async (userId) => {
    try {
        let detailEducation = await EducationEntity.find({
            user_id: userId
        });
        return detailEducation;
    } catch (err) {
        throw err;
    }
}
