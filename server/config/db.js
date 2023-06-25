const mongoose = require('mongoose');
require('dotenv').config();


const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the MongoDB server!");
  } catch (e) {
    console.log(e);
    throw e;
  }
}

module.exports = InitiateMongoServer;
