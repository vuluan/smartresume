import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';

const ObjectiveSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    }, objective: {
        type: String,
        required: true
    },
});

export const ObjectiveEntity = databaseUtilities.getEntity(mongoDBEntityNames.objectiveCollection, ObjectiveSchema);

