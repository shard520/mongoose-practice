require('./db/connection');
const yargs = require('yargs');
const { addMovie } = require('./movie/movie.methods');

const app = () => {
  if (process.argv[2] === 'add') {
    addMovie({ title: yargs.argv.title, actor: yargs.argv.actor });
  }
};

app();
