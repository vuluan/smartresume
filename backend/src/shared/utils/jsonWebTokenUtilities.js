import jwt from 'jsonwebtoken';
import { INVALID_ACCESS_TOKEN } from '../constants/messages';
import 'dotenv/config';


export const createToken = async (email, userId) => {

    try {
        var user = {
            "email": email,
            "_id": userId
        }

        return await jwt.sign({ user: user }, process.env.JWT_SECRETKEY);
    } catch (err) {
        throw err;
    }
}

export const verifyToken = async (token) => {
    try {
        let data = await jwt.verify(token, process.env.JWT_SECRETKEY);
        return await data;
    }
    catch (err) {
        throw INVALID_ACCESS_TOKEN;
    }
}
