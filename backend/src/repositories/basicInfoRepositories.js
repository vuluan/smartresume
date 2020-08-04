import { BasicInfoEntity } from '../entities/BasicInfoEntity';

export const add = async (basicInfoDTO) => {
    try {
        let newBasicInfo = new BasicInfoEntity();
        newBasicInfo.user_id = basicInfoDTO.user_id;
        newBasicInfo.firsName = basicInfoDTO.firstName;
        newBasicInfo.lastName = basicInfoDTO.lastName;
        newBasicInfo.email = basicInfoDTO.email;
        newBasicInfo.phone = basicInfoDTO.phone;
        newBasicInfo.address = basicInfoDTO.address;
        newBasicInfo.country = basicInfoDTO.country;
        newBasicInfo.region = basicInfoDTO.region;
        newBasicInfo.gitHub = basicInfoDTO.gitHub;
        newBasicInfo.linkedin = basicInfoDTO.linkedin;
        const createdBasicInfo = await newBasicInfo.save();
        return createdBasicInfo;
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        let detailBasicInfo = await BasicInfoEntity.findById(id);
        return detailBasicInfo;
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        let removedBasicInfo = await BasicInfoEntity.findByIdAndRemove(id);
        return removedBasicInfo;
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, basicInfoDTO) => {
    try {
        let updateBasicInfo = await BasicInfoEntity.findById(id);

        if (isNullOrUndefined(updateSkill))
            return null;

        newBasicInfo.firsName = basicInfoDTO.firstName;
        newBasicInfo.lastName = basicInfoDTO.lastName;
        newBasicInfo.email = basicInfoDTO.email;
        newBasicInfo.phone = basicInfoDTO.phone;
        newBasicInfo.address = basicInfoDTO.address;
        newBasicInfo.country = basicInfoDTO.country;
        newBasicInfo.region = basicInfoDTO.region;
        newBasicInfo.gitHub = basicInfoDTO.gitHub;
        newBasicInfo.linkedin = basicInfoDTO.linkedin;
        return await updateBasicInfo.save();
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        let detailBasicInfo = await BasicInfoEntity.find({
            user_id: userId
        });
        return detailBasicInfo;
    } catch (err) {
        throw err;
    }
}

