const yargs = require('yargs');
const { omitBy, isUndefined } = require('lodash');
const { disconnect } = require('mongoose');

require('./db/connection');

const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
  findMovies,
} = require('./movie/movie.methods');

const {
  addTVShow,
  listTVShows,
  updateTVShow,
  deleteTVShow,
  findTVShows,
  addEpisode,
  updateEpisode,
  listEpisodes,
  deleteEpisode,
} = require('./tvShow/tvShow.methods');

const app = () => {
  if (process.argv[2] === 'add') {
    addMovie({
      title: yargs.argv.title,
      actor: yargs.argv.actor,
      genre: yargs.argv.genre,
      rating: yargs.argv.rating,
    });
  } else if (process.argv[2] === 'list') {
    listMovies();
  } else if (process.argv[2] === 'update') {
    updateMovie(
      { title: yargs.argv.title },
      {
        title: yargs.argv.newTitle,
        actor: yargs.argv.newActor,
        genre: yargs.argv.newGenre,
        rating: yargs.argv.newRating,
      }
    );
  } else if (process.argv[2] === 'delete') {
    deleteMovie({ title: yargs.argv.title });
  } else if (process.argv[2] === 'search') {
    const searchQuery = omitBy(
      {
        title: yargs.argv.title,
        actor: yargs.argv.actor,
        genre: yargs.argv.genre,
        rating: yargs.argv.rating,
      },
      isUndefined
    );
    findMovies(searchQuery);
  } else if (process.argv[2] === 'minRating') {
    findMovies({ rating: { $gte: yargs.argv.rating } });
  } else if (process.argv[2] === 'addShow') {
    addTVShow({
      title: yargs.argv.title,
      actor: yargs.argv.actor,
      genre: yargs.argv.genre,
      rating: yargs.argv.rating,
    });
  } else if (process.argv[2] === 'listShows') {
    listTVShows();
  } else if (process.argv[2] === 'updateShow') {
    updateTVShow(
      { title: yargs.argv.title },
      {
        title: yargs.argv.newTitle,
        actor: yargs.argv.newActor,
        genre: yargs.argv.newGenre,
        rating: yargs.argv.newRating,
      }
    );
  } else if (process.argv[2] === 'deleteShow') {
    deleteTVShow({ title: yargs.argv.title });
  } else if (process.argv[2] === 'searchShow') {
    const searchQuery = omitBy(
      {
        title: yargs.argv.title,
        actor: yargs.argv.actor,
        genre: yargs.argv.genre,
        rating: yargs.argv.rating,
      },
      isUndefined
    );
    findTVShows(searchQuery);
  } else if (process.argv[2] === 'minRatingShow') {
    findTVShows({ rating: { $gte: yargs.argv.rating } });
  } else if (process.argv[2] === 'addEpisode') {
    addEpisode(
      { title: yargs.argv.title },
      {
        episodeTitle: yargs.argv.episodeTitle,
        rating: yargs.argv.rating,
        originalAirDate: yargs.argv.originalAirDate,
        season: yargs.argv.season,
        episodeNumber: yargs.argv.episodeNumber,
      }
    );
  } else if (process.argv[2] === 'updateEpisode') {
    updateEpisode(
      {
        title: yargs.argv.title,
        episodeTitle: yargs.argv.episodeTitle,
      },
      omitBy(
        {
          episodeTitle: yargs.argv.newEpisodeTitle,
          rating: yargs.argv.newRating,
          originalAirDate: yargs.argv.newOriginalAirDate,
          season: yargs.argv.newSeason,
          episodeNumber: yargs.argv.newEpisodeNumber,
        },
        isUndefined
      )
    );
  } else if (process.argv[2] === 'listEpisodes') {
    listEpisodes({ title: yargs.argv.title });
  } else if (process.argv[2] === 'deleteEpisode') {
    deleteEpisode({
      title: yargs.argv.title,
      episodeTitle: yargs.argv.episodeTitle,
    });
  } else {
    console.log('Incorrect command');
    disconnect();
  }
};

app();
