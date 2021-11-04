require('./db/connection');
const yargs = require('yargs');
const { addMovie, listMovies } = require('./movie/movie.methods');

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
  }
};

app();
