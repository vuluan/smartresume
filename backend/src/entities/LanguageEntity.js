import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';

const LanguageSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    proficiency: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export const LanguageEntity = databaseUtilities.getEntity(mongoDBEntityNames.languageCollection, LanguageSchema);
