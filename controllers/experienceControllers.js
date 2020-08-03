import * as experienceServices from '../services/experienceServices';
import { logger } from '../shared/utils/loggerUtilities';
import { ExperienceDTO } from '../dto/ExperienceDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';
import { check, validationResult } from 'express-validator';

export const validate = (method) => {
    switch (method) {
        case 'createExperience': {
            return [
                check('user_id', 'userid is empty').not().isEmpty(),
                check('title', 'title is empty').not().isEmpty(),
                check('type', 'type is empty').not().isEmpty(),
                check('company', 'company is empty').not().isEmpty(),
                check('location', 'location is empty').not().isEmpty(),
                check('start_date', 'start_date is empty').not().isEmpty(),
                check('end_date', 'end_date is empty').not().isEmpty(),
                check('description', 'description is empty').not().isEmpty(),
            ]
        }
        case 'deleteExperience': {
            return [
                check('id', 'id is empty').not().isEmpty(),
            ]
        }
        case 'updateExperience': {
            return [
                check('id', 'id is empty').not().isEmpty(),
                check('user_id', 'userid is empty').not().isEmpty(),
                check('title', 'title is empty').not().isEmpty(),
                check('type', 'type is empty').not().isEmpty(),
                check('company', 'company is empty').not().isEmpty(),
                check('location', 'location is empty').not().isEmpty(),
                check('start_date', 'start_date is empty').not().isEmpty(),
                check('end_date', 'end_date is empty').not().isEmpty(),
                check('description', 'description is empty').not().isEmpty(),
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
        let experience = new LanguageDTO(data.user_id, data.title, data.type, data.company, data.location, data.start_date, data.end_date, data.description);
        let createdExperience = await experienceServices.add(experience);

        return await res.status(200).send(new HttpResponseResult(true, "", createdExperience));

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
        let experience = await experienceServices.detail(req.params.id);

        if (!experience) {
            return res.status(404).send(new HttpResponseResult(false, "Experience not found", null));
        }

        return await res.status(200).send(new HttpResponseResult(true, "", experience));

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

        let experience = await experienceServices.deleteById(req.body.id);

        return await res.status(200).send(new HttpResponseResult(true, "", experience));

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
        let experience = new LanguageDTO(data.user_id, data.title, data.type, data.company, data.location, data.start_date, data.end_date, data.description);
        let updatedExperience = await experienceServices.updateById(data.id, experience);

        return await res.status(200).send(new HttpResponseResult(true, "", updatedExperience));

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
        let experience = await experienceServices.findByUserId(req.params.id);

        return await res.status(200).send(new HttpResponseResult(true, "", experience));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};