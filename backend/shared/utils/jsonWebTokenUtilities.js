import jwt from 'jsonwebtoken';
import config from '../../../config.json';
import { INVALID_ACCESS_TOKEN } from '../constants/messages';


export const createToken = async (username, userId, role) => {

    try {
        var user = {
            "username": username,
            "displayName": displayName,
            "_id": userId
        }

        return await jwt.sign({ user: user }, config.jwt.secretKey);
    } catch (err) {
        throw err;
    }
}

export const verifyToken = async (token) => {
    try {
        let data = await jwt.verify(token, config.jwt.secretKey);
        return await data;
    }
    catch (err) {
        throw INVALID_ACCESS_TOKEN;
    }
}
