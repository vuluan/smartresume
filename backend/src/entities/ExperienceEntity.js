import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';

const ExperienceSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        default: Date.now
    },
    end_date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    }
});

export const ExperienceEntity = databaseUtilities.getEntity(mongoDBEntityNames.experienceCollection, ExperienceSchema);
