const { Schema, model } = require('mongoose');

const episodeSchema = new Schema({
  episodeTitle: {
    type: String,
    unique: true,
    required: true,
  },
  rating: {
    type: Number,
    max: 10,
  },
  originalAirDate: {
    type: String,
  },
  season: {
    type: Number,
  },
  episodeNumber: {
    type: Number,
  },
});

const tvShowSchema = new Schema({
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
  episodes: [episodeSchema],
});

const TVShow = model('TVShow', tvShowSchema);

module.exports = { TVShow };
