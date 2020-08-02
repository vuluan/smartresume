import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';

const JobprofileSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    }, profile: {
        type: String,
        required: true
    },
});

export const JobprofileEntity = databaseUtilities.getEntity(mongoDBEntityNames.jobprofileCollection, JobprofileSchema);

