# mongoose-practice

This is a CLI app made as part of the CN Master Bootcamp. Users can perform CRUD operations to manage a collection of movies are based on the following schema:

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

To view all movies:

`node src/app.js list`
