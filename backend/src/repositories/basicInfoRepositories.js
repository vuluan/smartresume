import { BasicInfoEntity } from '../entities/BasicInfoEntity';
import { isNullOrUndefined } from '../shared/utils/generalUtilities';
export const add = async (basicInfoDTO) => {
    try {
        let newBasicInfo = new BasicInfoEntity();
        newBasicInfo.user_id = basicInfoDTO.user_id;
        newBasicInfo.firstName = basicInfoDTO.firstName;
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

        if (isNullOrUndefined(updateBasicInfo))
            return null;

            updateBasicInfo.firsName = basicInfoDTO.firstName;
            updateBasicInfo.lastName = basicInfoDTO.lastName;
            updateBasicInfo.email = basicInfoDTO.email;
            updateBasicInfo.phone = basicInfoDTO.phone;
            updateBasicInfo.address = basicInfoDTO.address;
            updateBasicInfo.country = basicInfoDTO.country;
            updateBasicInfo.region = basicInfoDTO.region;
            updateBasicInfo.gitHub = basicInfoDTO.gitHub;
            updateBasicInfo.linkedin = basicInfoDTO.linkedin;
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

