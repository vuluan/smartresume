
import * as jobprofileServices from '../services/jobprofileServices';
import { logger } from '../shared/utils/loggerUtilities';
import { JobprofileDTO } from '../dto/JobprofileDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';
import { check, validationResult } from 'express-validator';

export const validate = (method) => {
    switch (method) {
        case 'createJobprofile': {
            return [
                check('user_id', 'user_id is empty').not().isEmpty(), check('profile', 'profile is empty').not().isEmpty(),]
        }
        case 'deleteJobprofile': {
            return [
                check('id', 'id is empty').not().isEmpty(),
            ]
        }
        case 'updateJobprofile': {
            return [
                check('id', 'id is empty').not().isEmpty(),
                check('user_id', 'user_id is empty').not().isEmpty(), check('profile', 'profile is empty').not().isEmpty(),
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
        let jobprofile = new JobprofileDTO(
            data.user_id,
            data.profile,

        );
        let createdJobprofile = await jobprofileServices.add(jobprofile);

        return await res.status(200).send(new HttpResponseResult(true, "", createdJobprofile));

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
        let jobprofile = await jobprofileServices.detail(req.params.id);

        if (!jobprofile) {
            return res.status(404).send(new HttpResponseResult(false, "jobprofile not found", null));
        }
        if (jobprofile.user_id !== req.userInfo.user._id) {
            return await res.status(403).send(new HttpResponseResult(false, "Forbidden", null));
        }

        return await res.status(200).send(new HttpResponseResult(true, "", jobprofile));

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

        let jobprofileCheck = await jobprofileServices.detail(req.body.id);

        if (jobprofileCheck.user_id !== req.userInfo.user._id) {
            return await res.status(403).send(new HttpResponseResult(false, "Forbidden", null));
        }

        let jobprofile = await jobprofileServices.deleteById(req.body.id);

        return await res.status(200).send(new HttpResponseResult(true, "", jobprofile));

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

        let jobprofile = new JobprofileDTO(
            data.user_id,
            data.profile,

        );
        let updatedJobprofile = await jobprofileServices.updateById(data.id, jobprofile);
        console.log(JSON.stringify(updatedJobprofile));
        return await res.status(200).send(new HttpResponseResult(true, "", updatedJobprofile));

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

        let jobprofile = await jobprofileServices.findByUserId(req.params.id);

        return await res.status(200).send(new HttpResponseResult(true, "", jobprofile));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};