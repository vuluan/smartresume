import * as projectServices from '../services/projectServices';
import { logger } from '../shared/utils/loggerUtilities';
import { ProjectDTO } from '../dto/ProjectDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';
import { check, validationResult } from 'express-validator';

export const validate = (method) => {
    switch (method) {
        case 'createProject': {
            return [
                check('user_id', 'Userid is empty').not().isEmpty(),
                check('name', 'Project name is empty').not().isEmpty(),
                check('description', 'Project Description is empty').not().isEmpty(),
                check('duties', 'Duties is empty').not().isEmpty(),
                check('skills', 'Skills is empty').not().isEmpty(),
            ]
        }
        case 'deleteProject': {
            return [
                check('id', 'id is empty').not().isEmpty(),
            ]
        }
        case 'updateProject': {
            return [
                check('name', 'Project name is empty').not().isEmpty(),
                check('description', 'Project Description is empty').not().isEmpty(),
                check('duties', 'Duties is empty').not().isEmpty(),
                check('skills', 'Skills is empty').not().isEmpty(),
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
        let project = new ProjectDTO(data.user_id, data.name, data.description, data.duties, data.skills);
        let createdProject = await projectServices.add(project);

        return await res.status(200).send(new HttpResponseResult(true, "", createdProject));

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
        let project = await projectServices.detail(req.params.id);

        if (!project) {
            return res.status(404).send(new HttpResponseResult(false, "Project not found", null));
        }

        return await res.status(200).send(new HttpResponseResult(true, "", project));

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

        let project = await projectServices.deleteById(req.body.id);

        return await res.status(200).send(new HttpResponseResult(true, "", project));

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
        let project = new ProjectDTO(data.user_id, data.name, data.description, data.duties, data.skills);
        let updatedProject = await projectServices.updateById(data.id, project);

        return await res.status(200).send(new HttpResponseResult(true, "", updatedProject));

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
        let lstProjects = await projectServices.findByUserId(req.params.id);

        return await res.status(200).send(new HttpResponseResult(true, "", lstProjects));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};