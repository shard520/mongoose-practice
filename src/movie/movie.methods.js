const mongoose = require('mongoose');
const Movie = require('./movie.model');

exports.addMovie = async movieObj => {
  try {
    const movie = new Movie(movieObj);
    await movie.save();
    mongoose.disconnect();
    console.log('Movie successfully added to the DB.');
  } catch (err) {
    console.error(err);
  }
};
