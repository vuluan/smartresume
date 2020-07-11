import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';
import * as encryptUtilities from '../shared/utils/encryptUtilities';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.comparePassword = (password, hashedPassword) => {
    return encryptUtilities.compare(password, hashedPassword);
};

export const UserEntity = databaseUtilities.getEntity(mongoDBEntityNames.userCollection, UserSchema);
