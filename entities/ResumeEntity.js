import mongoose from 'mongoose';
import * as databaseUtilities from '../shared/utils/databaseUtilities';
import * as mongoDBEntityNames from '../shared/constants/mongoDbCollectionNames';

const ResumeSchema = new mongoose.Schema({
    user_id:{
            type:String,
            required:true
        },title:{
            type:String,
            required:true
        },description:{
            type:String,
            required:true
        }, 
})