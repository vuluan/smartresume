const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOLAB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected!!!');
  } catch (err) {
    console.log('Unable to connect!!!: ' + err);
    process.on('exit', function (code) {
      console.log(`About to exit with code ${code}`);
    });
  }
};

module.exports = connectDB;
