import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';

const SkillSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    skill_name: {
        type: String,
        required: true
    },
    is_hard_skill: {
        type: Boolean,
        required: true
    }
});

export const SkillEntity = databaseUtilities.getEntity(mongoDBEntityNames.skillCollection, SkillSchema);
