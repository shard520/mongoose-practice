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

exports.listMovies = async () => {
  try {
    const movieList = await Movie.find({});
    mongoose.disconnect();
    movieList.forEach(movie => console.log(movie));
  } catch (err) {
    console.error(err);
  }
};

exports.updateMovie = async (oldEntry, newEntry) => {
  try {
    const updatedMovie = await Movie.updateOne(oldEntry, newEntry);
    mongoose.disconnect();
    if (updatedMovie.modifiedCount === 1) {
      console.log('Movie successfully updated');
    } else {
      console.log('Update unsuccessful, please try again.');
    }
  } catch (err) {
    console.error(err);
  }
};

exports.deleteMovie = async movieObj => {
  try {
    const deletedMovie = await Movie.deleteOne(movieObj);
    mongoose.disconnect();
    if (deletedMovie.deletedCount === 1) {
      console.log('Movie deleted successfully');
    } else {
      console.log('Delete operation unsuccessful, please try again.');
    }
  } catch (err) {
    console.error(err);
  }
};

exports.findMovies = async searchQuery => {
  try {
    const results = await Movie.find(searchQuery);
    mongoose.disconnect();
    console.log(results);
  } catch (err) {
    console.error(err);
  }
};
