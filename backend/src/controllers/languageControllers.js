import * as languageServices from '../services/languageServices';
import { logger } from '../shared/utils/loggerUtilities';
import { LanguageDTO } from '../dto/LanguageDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';
import { check, validationResult } from 'express-validator';

export const validate = (method) => {
    switch (method) {
        case 'createLanguage': {
            return [
                check('user_id', 'userid is empty').not().isEmpty(),
                check('language', 'language is empty').not().isEmpty(),
                check('proficiency', 'proficiency is empty').not().isEmpty(),
            ]
        }
        case 'deleteLanguage': {
            return [
                check('id', 'id is empty').not().isEmpty(),
            ]
        }
        case 'updateLanguage': {
            return [
                check('id', 'id is empty').not().isEmpty(),
                check('user_id', 'userid is empty').not().isEmpty(),
                check('language', 'language is empty').not().isEmpty(),
                check('proficiency', 'proficiency is empty').not().isEmpty(),
            ]
        }
    }
}

export const add = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

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

export const detail = async (req, res) => {
    try {
        let language = await languageServices.detail(req.params.id);

        if (!language) {
            return res.status(404).send(new HttpResponseResult(false, "Language not found", null));
        }

        return await res.status(200).send(new HttpResponseResult(true, "", language));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};

export const deleteById = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        let language = await languageServices.deleteById(req.body.id);

        return await res.status(200).send(new HttpResponseResult(true, "", language));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};

export const updateById = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        let data = req.body;
        let language = new LanguageDTO(data.user_id, data.language, data.proficiency);
        let updatedLanguage = await languageServices.updateById(data.id, language);

        return await res.status(200).send(new HttpResponseResult(true, "", updatedLanguage));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};

export const findByUserId = async (req, res) => {
    try {
        let languages = await languageServices.findByUserId(req.params.id);

        return await res.status(200).send(new HttpResponseResult(true, "", languages));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};