const mongoose = require('mongoose');
import { logger } from './shared/utils/loggerUtilities';
mongoose.set('debug', true);


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOLAB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected!!!');
    mongoose.set("debug", (collectionName, method, query, doc) => {
      console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
    });
  } catch (err) {
    console.log('Unable to connect!!!: ' + err);
    process.on('exit', function (code) {
      console.log(`About to exit with code ${code}`);
    });
  }
};

module.exports = connectDB;
