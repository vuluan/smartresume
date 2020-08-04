import * as coverLetterServices from '../services/coverLetterServices';
import { logger } from '../shared/utils/loggerUtilities';
import { CoverLetterDTO } from '../dto/CoverLetterDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';
import { check, validationResult } from 'express-validator';

export const validate = (method) => {
    switch (method) {
        case 'createCoverLetter': {
            return [
                check('user_id', 'userid is empty').not().isEmpty(),
                check('title', 'title is empty').not().isEmpty(),
                check('body', 'body is empty').not().isEmpty(),
            ]
        }
        case 'deleteCoverLetter': {
            return [
                check('id', 'id is empty').not().isEmpty(),
            ]
        }
        case 'updateCoverLetter': {
            return [
                check('id', 'id is empty').not().isEmpty(),
                check('user_id', 'userid is empty').not().isEmpty(),
                check('title', 'title is empty').not().isEmpty(),
                check('body', 'body is empty').not().isEmpty(),
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
        let coverLetter = new CoverLetterDTO(data.user_id, data.title, data.body);
        let createdCoverLetter = await coverLetterServices.add(coverLetter);

        return await res.status(200).send(new HttpResponseResult(true, "", createdCoverLetter));

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
        let coverLetter = await coverLetterServices.detail(req.params.id);

        if (!coverLetter) {
            return res.status(404).send(new HttpResponseResult(false, "CoverLetter not found", null));
        }

        return await res.status(200).send(new HttpResponseResult(true, "", coverLetter));

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

        let coverLetter = await coverLetterServices.deleteById(req.body.id);

        return await res.status(200).send(new HttpResponseResult(true, "", coverLetter));

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
        let coverLetter = new CoverLetterDTO(data.user_id, data.title, data.body);
        let updatedCoverLetter = await coverLetterServices.updateById(data.id, coverLetter);

        return await res.status(200).send(new HttpResponseResult(true, "", updatedCoverLetter));

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
        let coverLetters = await coverLetterServices.findByUserId(req.params.id);

        return await res.status(200).send(new HttpResponseResult(true, "", coverLetters));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};