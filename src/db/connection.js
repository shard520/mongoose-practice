const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Successfully connected');
  } catch (err) {
    console.error(err);
  }
};

connection();
