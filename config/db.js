const mongoose = require('mongoose');
const config = require('config');
const db = process.env.MONGODB_URI || config.get('MONGO_URI');


const connectDB = () => {
  try {
    mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(error.data);
    process.exit(1);
  }
}

module.exports = connectDB;