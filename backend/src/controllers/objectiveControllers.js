import * as objectiveServices from '../services/objectiveServices';
import { logger } from '../shared/utils/loggerUtilities';
import { ObjectiveDTO } from '../dto/ObjectiveDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';
import { check, validationResult } from 'express-validator';

export const validate = (method) => {
    switch (method) {
        case 'createObjective': {
            return [
                check('user_id', 'user_id is empty').not().isEmpty(), check('objective', 'objective is empty').not().isEmpty(),]
        }
        case 'deleteObjective': {
            return [
                check('id', 'id is empty').not().isEmpty(),
            ]
        }
        case 'updateObjective': {
            return [
                check('id', 'id is empty').not().isEmpty(),
                check('user_id', 'user_id is empty').not().isEmpty(), check('objective', 'objective is empty').not().isEmpty(),
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
        let objective = new ObjectiveDTO(
            data.user_id,
            data.objective,

        );
        let createdObjective = await objectiveServices.add(objective);

        return await res.status(200).send(new HttpResponseResult(true, "", createdObjective));

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
        let objective = await objectiveServices.detail(req.params.id);

        if (!objective) {
            return res.status(404).send(new HttpResponseResult(false, "objective not found", null));
        }

        return await res.status(200).send(new HttpResponseResult(true, "", objective));

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

        let objective = await objectiveServices.deleteById(req.body.id);

        return await res.status(200).send(new HttpResponseResult(true, "", objective));

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
        let objective = new ObjectiveDTO(
            data.user_id,
            data.objective,

        );
        let updatedObjective = await objectiveServices.updateById(data.id, objective);

        return await res.status(200).send(new HttpResponseResult(true, "", updatedObjective));

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
        let objective = await objectiveServices.findByUserId(req.params.id);

        return await res.status(200).send(new HttpResponseResult(true, "", objective));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};