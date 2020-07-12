import { LanguageEntity } from '../entities/LanguageEntity';

export const add = async (languageDTO) => {
    try {
        let newLanguage = new LanguageEntity();
        newLanguage.user_id = languageDTO.user_id;
        newLanguage.language = languageDTO.language;
        newLanguage.proficiency = languageDTO.proficiency;

        const createdLanguage = await newLanguage.save();

        return await createdLanguage;
    } catch (err) {
        throw err;
    }
}