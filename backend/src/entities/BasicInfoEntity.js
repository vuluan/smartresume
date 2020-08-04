import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';

const BasicInfoSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    gitHub: {
        type: String,
        required: false
    },
    linkedin: {
        type: String,
        required: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export const BasicInfoEntity = databaseUtilities.getEntity(mongoDBEntityNames.basicInfoCollection, BasicInfoSchema);
