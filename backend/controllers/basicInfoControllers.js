import * as basicinfoServices from '../services/basicinfoServices';
import { logger } from '../shared/utils/loggerUtilities';
import { BasicInfoDTO } from '../dto/BasicInfoDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';
import { check, validationResult } from 'express-validator';

export const validate = (method) => {
    switch (method) {
        case 'createBasicInfo': {
            return [
                check('user_id', 'userid is empty').not().isEmpty(),
                check('firstName', 'firstName is empty').not().isEmpty(),
                check('lastName', 'lastName is empty').not().isEmpty(),
                check('email', 'email is empty').not().isEmpty(),
                check('phone', 'phone is empty').not().isEmpty(),
                check('address', 'address is empty').not().isEmpty(),
                check('country', 'country is empty').not().isEmpty(),
                check('region', 'region is empty').not().isEmpty(),
            ]
        }
        case 'deleteBasicInfo': {
            return [
                check('id', 'id is empty').not().isEmpty(),
            ]
        }
        case 'updateBasicInfo': {
            return [
                check('id', 'id is empty').not().isEmpty(),
                check('user_id', 'userid is empty').not().isEmpty(),
                check('firstName', 'firstName is empty').not().isEmpty(),
                check('lastName', 'lastName is empty').not().isEmpty(),
                check('email', 'email is empty').not().isEmpty(),
                check('phone', 'phone is empty').not().isEmpty(),
                check('address', 'address is empty').not().isEmpty(),
                check('country', 'country is empty').not().isEmpty(),
                check('region', 'region is empty').not().isEmpty(),
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
        let basicinfo = new BasicInfoDTO(data.user_id, 
            data.firstName,
            data.lastName,
            data.email,
            data.phone,
            data.address,
            data.country,
            data.region,
            data.gitHub,
            data.linkedin);
        let createdBasicInfo = await basicinfoServices.add(basicinfo);

        return await res.status(200).send(new HttpResponseResult(true, "", createdBasicInfo));

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
        let basicinfo = await basicinfoServices.detail(req.params.id);

        if (!basicinfo) {
            return res.status(404).send(new HttpResponseResult(false, "BasicInfo not found", null));
        }

        return await res.status(200).send(new HttpResponseResult(true, "", basicinfo));

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

        let basicinfo = await basicinfoServices.deleteById(req.body.id);

        return await res.status(200).send(new HttpResponseResult(true, "", basicinfo));

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
        let basicinfo = new BasicInfoDTO(data.user_id, 
            data.firstName,
            data.lastName,
            data.email,
            data.phone,
            data.address,
            data.country,
            data.region,
            data.gitHub,
            data.linkedin);
        let updatedBasicInfo = await basicinfoServices.updateById(data.id, basicinfo);

        return await res.status(200).send(new HttpResponseResult(true, "", updatedBasicInfo));

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
        let basicinfos = await basicinfoServices.findByUserId(req.params.id);

        return await res.status(200).send(new HttpResponseResult(true, "", basicinfos));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};