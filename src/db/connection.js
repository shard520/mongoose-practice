const { connect } = require('mongoose');
require('dotenv').config();

const connection = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log('Successfully connected');
  } catch (err) {
    console.error(err);
  }
};

connection();
