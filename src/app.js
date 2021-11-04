require('./db/connection');
const yargs = require('yargs');
const { omitBy, isUndefined } = require('lodash');

const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
  findMovies,
} = require('./movie/movie.methods');

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
  }
};

app();
