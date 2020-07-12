import * as languageRepositories from '../repositories/languageRepositories';

export const add = async (languageDTO) => {
    try {
        return await languageRepositories.add(languageDTO);
    } catch (err) {
        throw err;
    }

}