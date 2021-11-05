const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  actor: {
    type: String,
    default: 'Not specified',
  },
  genre: {
    type: String,
    default: 'Not specified',
  },
  rating: {
    type: Number,
    max: 10,
  },
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;
