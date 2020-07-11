import { UserEntity } from '../entities/UserEntity';


export const login = async (email, password) => {
    try {

        let logginUser = await UserEntity.findOne({
            email: email
        });

        return await logginUser;
    } catch (err) {
        throw err;
    }
}

export const register = async (user) => {
    try {
        let newUser = new UserEntity();
        newUser.email = user.email;
        newUser.password = user.password;

        const createdUser = await newUser.save();

        createdUser.password = undefined;

        return await createdUser;
    } catch (err) {
        throw err;
    }
}

export const findUserByEmail = async (email) => {
    try {
        let user = await UserEntity.findOne({
            email: email
        });

        return await user;
    } catch (err) {
        throw err;
    }
}
