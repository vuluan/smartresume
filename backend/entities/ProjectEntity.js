import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';

const ProjectSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Type of Array<String>
    duties: {
        type: []
    },
    // Type of Array<SkillDTO>
    skills: {
        type: []
    }
});

export const ProjectEntity = databaseUtilities.getEntity(mongoDBEntityNames.projectCollection, ProjectSchema);
