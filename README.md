# mongoose-practice

This is a CLI app made as part of the CN Master Bootcamp. Users can perform CRUD operations to manage a collection of movies that are based on the following schema:

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

# Example Commands

To add a movie:

`node src/app.js add --title="The Matrix" --actor="Keanu Reeves" --genre="Sci-fi" --rating="9"`

---

To view all movies:

`node src/app.js list`

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
