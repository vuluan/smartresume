import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';

const EducationSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    }, school: {
        type: String,
        required: true
    }, degree: {
        type: String,
        required: true
    }, field: {
        type: String,
        required: true
    }, start: {
        type: String,
        required: true
    }, finish: {
        type: String,
        required: true
    },
});

export const EducationEntity = databaseUtilities.getEntity(mongoDBEntityNames.educationCollection, EducationSchema);

