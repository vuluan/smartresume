import * as resumeServices from '../services/resumeServices';
import { logger } from '../shared/utils/loggerUtilities';
import { ResumeDTO } from '../dto/ResumeDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';
import { check, validationResult } from 'express-validator';

export const validate = (method) => {
    switch (method) {
        case 'createResume': {
            return [
                check('user_id', 'user_id is empty').not().isEmpty(), check('title', 'title is empty').not().isEmpty(), check('description', 'description is empty').not().isEmpty(),]
        }
        case 'deleteResume': {
            return [
                check('id', 'id is empty').not().isEmpty(),
            ]
        }
        case 'updateResume': {
            return [
                check('id', 'id is empty').not().isEmpty(),
                check('user_id', 'user_id is empty').not().isEmpty(), check('title', 'title is empty').not().isEmpty(), check('description', 'description is empty').not().isEmpty(),
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
        if (data.user_id !== req.userInfo.user._id) {
            return await res.status(403).send(new HttpResponseResult(false, "Forbidden", null));
        }

        // if (data.education !== undefined && data.education.isEmpty()) {
        //     data.education = undefined
        // }
        // if (data.experience !== undefined && data.experience.isEmpty()) {
        //     data.experience = undefined
        // }
        console.log("DEBUG!!!! ADD");
        console.log(data.profile);
        console.log(typeof data.profile);

        if (data.profile !== undefined && data.profile.isEmpty()) {
            data.profile = undefined
        }
        if (data.objective !== undefined && data.objective.isEmpty()) {
            data.objective = undefined
        }
        // if (data.skills !== undefined && data.skills.isEmpty()) {
        //     data.skills = undefined
        // }
        // if (data.languages !== undefined && data.languages.isEmpty()) {
        //     data.languages = undefined
        // }
        // if (data.projects !== undefined && data.projects.isEmpty()) {
        //     data.projects = undefined
        // }



        let resume = new ResumeDTO(
            data.user_id,
            data.title,
            data.description,
            data.education,
            data.experience,
            data.profile,
            data.objective,
            data.skills,
            data.languages,
            data.projects

        );
        let createdResume = await resumeServices.add(resume);

        return await res.status(200).send(new HttpResponseResult(true, "", createdResume));

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
        let resume = await resumeServices.detail(req.params.id);

        if (!resume) {
            return res.status(404).send(new HttpResponseResult(false, "resume not found", null));
        }
        if (resume.user_id !== req.userInfo.user._id) {
            return await res.status(403).send(new HttpResponseResult(false, "Forbidden", null));
        }

        return await res.status(200).send(new HttpResponseResult(true, "", resume));

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
        let resumeCheck = await resumeServices.detail(req.body.id);

        if (resumeCheck.user_id !== req.userInfo.user._id) {
            return await res.status(403).send(new HttpResponseResult(false, "Forbidden", null));
        }

        let resume = await resumeServices.deleteById(req.body.id);

        return await res.status(200).send(new HttpResponseResult(true, "", resume));

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

        if (data.user_id !== req.userInfo.user._id) {
            return await res.status(403).send(new HttpResponseResult(false, "Forbidden", null));
        }


        // if (data.education !== undefined && data.education.isEmpty()) {
        //     data.education = undefined
        // }
        // if (data.experience !== undefined && data.experience.isEmpty()) {
        //     data.experience = undefined
        // }
        console.log("DEBUG!!!! EDIT");
        console.log(data.profile);
        console.log(typeof data.profile);
        if (data.profile !== undefined && data.profile.isEmpty()) {
            data.profile = undefined
        }
        if (data.objective !== undefined && data.objective.isEmpty()) {
            data.objective = undefined
        }
        // if (data.skills !== undefined && data.skills.isEmpty()) {
        //     data.skills = undefined
        // }
        // if (data.languages !== undefined && data.languages.isEmpty()) {
        //     data.languages = undefined
        // }
        // if (data.projects !== undefined && data.projects.isEmpty()) {
        //     data.projects = undefined
        // }

        let resume = new ResumeDTO(
            data.user_id,
            data.title,
            data.description,
            data.education,
            data.experience,
            data.profile,
            data.objective,
            data.skills,
            data.languages,
            data.projects

        );
        let updatedResume = await resumeServices.updateById(data.id, resume);

        return await res.status(200).send(new HttpResponseResult(true, "", updatedResume));

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
        if (req.params.id !== req.userInfo.user._id) {
            return await res.status(403).send(new HttpResponseResult(false, "Forbidden", null));
        }

        let resume = await resumeServices.findByUserId(req.params.id);

        return await res.status(200).send(new HttpResponseResult(true, "", resume));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};