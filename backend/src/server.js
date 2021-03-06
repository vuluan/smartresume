import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import profileRoutes from './routes/profileRoutes';
import languageRoutes from './routes/languageRoutes';
import coverLetterRoutes from './routes/coverLetterRoutes';
import basicInfoRoutes from './routes/basicInfoRoutes';
import educationRoutes from './routes/educationRoutes';
import jobprofileRoutes from './routes/jobprofileRoutes';
import objectiveRoutes from './routes/objectiveRoutes';
import resumeRoutes from './routes/resumeRoutes';
import projectRoutes from './routes/projectRoutes';
import skillRoutes from './routes/skillRoutes';
import experienceRoutes from './routes/experienceRoutes';
import { logger } from './shared/utils/loggerUtilities';
import * as jwtUtilities from './shared/utils/jsonWebTokenUtilities';
import 'dotenv/config';

const connectDB = require('./dbConnection');

const app = express();

app.use(express.json());

// serving static files
app.use(express.static('public'));

app.use(cors({ origin: true }));

connectDB();

// Register resource folder
app.use('/images', express.static(__dirname + '/images'));

// Middleware to register CORS
app.all('*', (req, res, err, next) => {
    console.log('CORS invoked');
    if (err) {
        logger.error(req, err);
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        ); // If needed
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-Requested-With,content-type'
        ); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    }

    next();
});

// Middleware to register JWT Authentication
app.use(async (req, res, next) => {
    try {
        if (
            req.headers &&
            req.headers.authorization &&
            req.headers.authorization.split(' ')[0] === 'Bearer'
        ) {
            let authorization = req.headers.authorization;
            let accessToken = authorization.split(' ')[1];

            let userData = await jwtUtilities.verifyToken(accessToken);

            console.log(userData);

            req.userInfo = userData;
            next();
        } else {
            req.userInfo = undefined;
            next();
        }
    } catch (err) {
        logger.error(err);
        console.log(err);
        req.userInfo = undefined;
        next();
    }
});


// Register api Routing
authRoutes(app);
profileRoutes(app);
languageRoutes(app);
coverLetterRoutes(app);
basicInfoRoutes(app);

educationRoutes(app);
jobprofileRoutes(app);
objectiveRoutes(app);
resumeRoutes(app);
projectRoutes(app);
skillRoutes(app);
experienceRoutes(app);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
