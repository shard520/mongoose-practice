# mongoose-practice

This is a CLI app made as part of the CN Master Bootcamp. Users can perform CRUD operations to manage a collection of movies and TV shows that are based on the following schema:

```javascript
const movieSchema = new mongoose.Schema({
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
```

```javascript
const episodeSchema = new mongoose.Schema({
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

const tvShowSchema = new mongoose.Schema({
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
```

# Example Commands

## Movies

To add a movie:

`node src/app.js "add" --title="The Matrix" --actor="Keanu Reeves" --genre="Sci-fi" --rating="9"`

---

To view all movies:

`node src/app.js "list"`

---

To update a movie, first use the `title` flag to select the movie, then preface properties to be updated with the word new, eg `newActor`:

`node src/app.js "update" --title="Spiderman" --newActor="Tobey Maguire"`

---

To delete a movie:

`node src/app.js "delete" --title="Spiderman"`

---

To search for movies, specify the required search terms, eg to search for all action films starring Bruce Willis:

`node src/app.js "search" --genre="Action" --actor="Bruce Willis"`

Or to search for all sci-fi movies:

`node src/app.js "search" --genre="Sci-fi"`

---

To find movies with a minimum rating:

`node src/app.js "minRating" --rating=7`

## TV Shows

All movie commands will operate the same for TV Shows, simply append the word Show to a command, eg: `addShow`, `deleteShow`, `searchShow`, the exception to this is when viewing a list of all shows in the DB, use `listShows`.

---

To add episode information, first add the show then add the episodes using the title of the show, followed by the episode information:

`node src/app.js "addEpisode" --title="Battlestar Galactica" --episodeTitle="Daybreak: Part 2" --rating="9" --originalAirDate="24/03/2009" --season=4 --episodeNumber=20`

---

When updating show information, use the same flags as updating a movie, eg `--newRating`. To update episode information, include the title of the show and the episode before using the relevant flag, eg `--newOriginalAirDate`:

`node src/app.js "updateEpisode" --title="Battlestar Galactica" --episodeTitle="Someone to Watch Over Me" --newOriginalAirDate="03/03/2009" --newEpisodeNumber=17`

---

To list all episodes for a show:

`node src/app.js "listEpisodes" --title="Stargate SG-1"`

---

To delete an episode:

`node src/app.js "deleteEpisode" --title="Stargate SG-1" --episodeTitle="Unending"`
