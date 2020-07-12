import * as languageServices from '../services/languageServices';
import { logger } from '../shared/utils/loggerUtilities';
import { LanguageDTO } from '../dto/LanguageDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';

export const add = async (req, res) => {

    try {
        let data = req.body;
        let language = new LanguageDTO(data.user_id, data.language, data.proficiency);
        let createdLanguage = await languageServices.add(language);

        return await res.status(200).send(new HttpResponseResult(true, "", createdLanguage));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};