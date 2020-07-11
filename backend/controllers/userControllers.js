import * as userServices from '../services/userServices';
import { logger } from '../shared/utils/loggerUtilities';
import { UserDTO } from '../dto/UserDTO';
import HttpResponseResult from '../shared/models/HttpResponseResult';
import { UNAUTHORIZED_REQUEST } from '../shared/constants/messages';

export const register = async (req, res) => {

    try {
        let data = req.body;

        let user = new UserDTO(data.email, data.password, data.confirmedPassword);

        let createdUser = await userServices.register(user);

        return await res.status(200).send(new HttpResponseResult(true, "", createdUser));

    } catch (err) {
        logger.error(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
};

export const login = async (req, res) => {
    try {
        let data = req.body;

        let email = data.username;
        let password = data.password;

        let userInfo = await userServices.login(username, password);

        return await res.send(new HttpResponseResult(true, "", userInfo));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }

        logger.error(err);
        return await res.send(new HttpResponseResult(false, err, null));
    }
}

export const loginRequired = (req, res, next) => {
    if (req.userInfo)
        next();
    else {
        return res.status(401).send(new HttpResponseResult(false, UNAUTHORIZED_REQUEST, null));
    }
}
