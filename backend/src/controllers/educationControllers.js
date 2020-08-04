
import * as educationServices from '../services/educationServices';
import { logger } from '../shared/utils/loggerUtilities';
import { EducationDTO } from '../dto/EducationDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';
import { check, validationResult } from 'express-validator';



export const validate = (method) => {
    switch (method) {
        case 'createEducation': {
            return [
                check('user_id', 'user_id is empty').not().isEmpty(), check('school', 'school is empty').not().isEmpty(), check('degree', 'degree is empty').not().isEmpty(), check('field', 'field is empty').not().isEmpty(), check('start', 'start is empty').not().isEmpty(), check('finish', 'finish is empty').not().isEmpty(),]
        }
        case 'deleteEducation': {
            return [
                check('id', 'id is empty').not().isEmpty(),
            ]
        }
        case 'updateEducation': {
            return [
                check('id', 'id is empty').not().isEmpty(),
                check('user_id', 'user_id is empty').not().isEmpty(), check('school', 'school is empty').not().isEmpty(), check('degree', 'degree is empty').not().isEmpty(), check('field', 'field is empty').not().isEmpty(), check('start', 'start is empty').not().isEmpty(), check('finish', 'finish is empty').not().isEmpty(),
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
        let education = new EducationDTO(
            data.user_id,
            data.school,
            data.degree,
            data.field,
            data.start,
            data.finish,

        );
        let createdEducation = await educationServices.add(education);

        return await res.status(200).send(new HttpResponseResult(true, "", createdEducation));

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
        let education = await educationServices.detail(req.params.id);

        if (!education) {
            return res.status(404).send(new HttpResponseResult(false, "education not found", null));
        }

        return await res.status(200).send(new HttpResponseResult(true, "", education));

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

        let education = await educationServices.deleteById(req.body.id);

        return await res.status(200).send(new HttpResponseResult(true, "", education));

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
        let education = new EducationDTO(
            data.user_id,
            data.school,
            data.degree,
            data.field,
            data.start,
            data.finish,

        );
        let updatedEducation = await educationServices.updateById(data.id, education);

        return await res.status(200).send(new HttpResponseResult(true, "", updatedEducation));

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
        let education = await educationServices.findByUserId(req.params.id);

        return await res.status(200).send(new HttpResponseResult(true, "", education));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};