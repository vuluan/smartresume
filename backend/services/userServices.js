import * as userRepositories from '../repositories/userRepositories.js';
import * as encryptUtilities from '../shared/utils/encryptUtilities';
import * as jwtUtilities from '../shared/utils/jsonWebTokenUtilities';
import CustomException from '../shared/models/CustomException';
import * as errorMessage from '../shared/constants/messages';
import AuthenticatedUser from '../dto/AuthenticatedUser';
import { isNullOrUndefined } from '../shared/utils/generalUtilities';

export const register = async (userDto) => {
    try {
        if (userDto.password !== userDto.confirmedPassword) {
            throw new CustomException(true, errorMessage.PASSWORD_CONFIRMEDPASSWORD_MISMATCHED);
        }

        const existingUser = await userRepositories.findUserByEmail(userDto.email);

        if (!isNullOrUndefined(existingUser)) {
            throw new CustomException(true, errorMessage.USER_WITH_EMAIL_EXISTED);
        }

        userDto.password = encryptUtilities.encrypt(userDto.password);

        return await userRepositories.register(userDto);
    } catch (err) {
        throw err;
    }

}

export const login = async (username, password) => {
    try {
        let createdUser = await userRepositories.login(username, password);

        if (!createdUser) throw new CustomException(true, errorMessage.INVALID_USERNAME_PASSWORD);

        if (!createdUser.comparePassword(password, createdUser.password)) throw new CustomException(true, errorMessage.INVALID_USERNAME_PASSWORD);

        let access_token = await jwtUtilities.createToken(username, createdUser.id, createdUser.role);

        return await new AuthenticatedUser(username, access_token, createdUser.role);
    } catch (err) {
        throw err;
    }
}