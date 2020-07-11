import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import 'dotenv/config';

const connectDB = require('./dbConnection');

const app = express();

app.use(express.json());

// serving static files
app.use(express.static('public'));

app.use(cors({ origin: true }));

app.all('*', (req, res, err, next) => {
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

// Register resource folder
app.use('/images', express.static(__dirname + '/images'));

connectDB();

// Register api Routing
authRoutes(app);

app.listen(process.env.PORT, () => {
    console.log('Server started...');
});
