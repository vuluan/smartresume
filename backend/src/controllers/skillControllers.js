import * as skillServices from '../services/skillServices';
import { logger } from '../shared/utils/loggerUtilities';
import { SkillDTO } from '../dto/SkillDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';
import { check, validationResult } from 'express-validator';

export const validate = (method) => {
    switch (method) {
        case 'createSkill': {
            return [
                check('user_id', 'userid is empty').not().isEmpty(),
                check('skill_name', 'Skill Name is empty').not().isEmpty(),
                check('is_hard_skill', 'Is Hard Skill is empty').not().isEmpty()
            ]
        }
        case 'deleteSkill': {
            return [
                check('id', 'id is empty').not().isEmpty(),
            ]
        }
        case 'updateSkill': {
            return [
                check('skill_name', 'Skill Name is empty').not().isEmpty(),
                check('is_hard_skill', 'Is Hard Skill is empty').not().isEmpty()
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
        let skill = new SkillDTO(data.user_id, data.skill_name, data.is_hard_skill);
        let createdSkill = await skillServices.add(skill);

        return await res.status(200).send(new HttpResponseResult(true, "", createdSkill));

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
        let skill = await skillServices.detail(req.params.id);

        if (!skill) {
            return res.status(404).send(new HttpResponseResult(false, "Skill not found", null));
        }

        return await res.status(200).send(new HttpResponseResult(true, "", skill));

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

        let skill = await skillServices.deleteById(req.body.id);

        return await res.status(200).send(new HttpResponseResult(true, "", skill));

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
        let skill = new SkillDTO(data.user_id, data.skill_name, data.is_hard_skill);
        let updatedSkill = await skillServices.updateById(data.id, skill);

        return await res.status(200).send(new HttpResponseResult(true, "", updatedSkill));

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
        let lstSkills = await skillServices.findByUserId(req.params.id);

        return await res.status(200).send(new HttpResponseResult(true, "", lstSkills));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};