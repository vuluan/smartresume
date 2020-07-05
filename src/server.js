const express = require('express');
const connectDB = require('./dbConnection');
require('dotenv').config();

const app = express();

app.use(express.json());

connectDB();

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server started...');
});
