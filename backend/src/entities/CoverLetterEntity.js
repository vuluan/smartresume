import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';

const CoverLetterSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export const CoverLetterEntity = databaseUtilities.getEntity(mongoDBEntityNames.coverLetterCollection, CoverLetterSchema);
