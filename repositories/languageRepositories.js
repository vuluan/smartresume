import { LanguageEntity } from '../entities/LanguageEntity';

export const add = async (languageDTO) => {
    try {
        let newLanguage = new LanguageEntity();
        newLanguage.user_id = languageDTO.user_id;
        newLanguage.language = languageDTO.language;
        newLanguage.proficiency = languageDTO.proficiency;
        const createdLanguage = await newLanguage.save();
        return createdLanguage;
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        let detailLanguage = await LanguageEntity.findById(id);
        return detailLanguage;
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        let removedLanguage = await LanguageEntity.findByIdAndRemove(id);
        return removedLanguage;
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, languageDTO) => {
    try {
        let updateLanguage = await LanguageEntity.findById(id);

        if (isNullOrUndefined(updateLanguage))
            return null;

        updateLanguage.language = languageDTO.language;
        updateLanguage.proficiency = languageDTO.proficiency;
        return await updateLanguage.save();
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        let detailLanguage = await LanguageEntity.find({
            user_id: userId
        });
        return detailLanguage;
    } catch (err) {
        throw err;
    }
}

