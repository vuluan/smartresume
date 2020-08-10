import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';

const ResumeSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    }, title: {
        type: String,
        required: true
    }, description: {
        type: String,
        required: true
    },
    education: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: mongoDBEntityNames.educationCollection
        }
    ]
    ,
    experience: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: mongoDBEntityNames.experienceCollection
        }
    ],
    skills: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: mongoDBEntityNames.skillCollection
        }
    ],
    languages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: mongoDBEntityNames.languageCollection
        }
    ],
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: mongoDBEntityNames.projectCollection
        }
    ],

    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: mongoDBEntityNames.jobprofileCollection
    },
    objective: {
        type: mongoose.Schema.Types.ObjectId,
        ref: mongoDBEntityNames.objectiveCollection
    }
    ,
    coverLetter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: mongoDBEntityNames.coverLetterCollection
    }
});

export const ResumeEntity = databaseUtilities.getEntity(mongoDBEntityNames.resumeCollection, ResumeSchema);

