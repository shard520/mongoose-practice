const { disconnect } = require('mongoose');
const { TVShow } = require('./tvShow.model');

exports.addTVShow = async tvShowObj => {
  try {
    const tvShow = new TVShow(tvShowObj);
    await tvShow.save();
    disconnect();
    console.log('TV Show successfully added to the DB.');
  } catch (err) {
    console.error(err);
  }
};

exports.listTVShows = async () => {
  try {
    const tvShowList = await TVShow.find({});
    disconnect();
    tvShowList.forEach(tvShow => console.log(tvShow));
  } catch (err) {
    console.error(err);
  }
};

exports.updateTVShow = async (oldEntry, newEntry) => {
  try {
    const updatedTVShow = await TVShow.updateOne(oldEntry, newEntry);
    disconnect();
    if (updatedTVShow.modifiedCount === 1) {
      console.log('TV Show successfully updated');
    } else {
      console.log('Update unsuccessful, please try again.');
    }
  } catch (err) {
    console.error(err);
  }
};

exports.deleteTVShow = async tvShowObj => {
  try {
    const deletedTVShow = await TVShow.deleteOne(tvShowObj);
    disconnect();
    if (deletedTVShow.deletedCount === 1) {
      console.log('TV Show deleted successfully');
    } else {
      console.log('Delete operation unsuccessful, please try again.');
    }
  } catch (err) {
    console.error(err);
  }
};

exports.findTVShows = async searchQuery => {
  try {
    const searchResults = await TVShow.find(searchQuery);
    disconnect();
    if (searchResults.length > 0) {
      console.log(
        `${searchResults.length} TV Show${
          searchResults.length > 1 ? 's' : ''
        } found that match your search`,
        searchResults
      );
    } else {
      console.log('No TV Shows found that matched your search.');
    }
  } catch (err) {
    console.error(err);
  }
};

exports.addEpisode = async (tvShowObj, episodeObj) => {
  try {
    const tvShow = await TVShow.findOne(tvShowObj);
    tvShow.episodes.push(episodeObj);
    await tvShow.save();
    disconnect();
    console.log('Episode successfully added');
  } catch (err) {
    console.error(err);
  }
};

exports.updateEpisode = async ({ title, episodeTitle }, newEntry) => {
  try {
    const tvShow = await TVShow.findOne({
      title: title,
    });

    // Find episode, then find index and remove from array
    const episodeToUpdate = tvShow.episodes.find(
      episode => episode.episodeTitle === episodeTitle
    );
    const episodeIndex = tvShow.episodes.findIndex(
      episode => episode.episodeTitle === episodeTitle
    );
    tvShow.episodes.splice(episodeIndex, 1);

    // Update episode object with new values
    for (const key in newEntry)
      if (key in episodeToUpdate) episodeToUpdate[key] = newEntry[key];

    // Add episode back to array
    tvShow.episodes.push(episodeToUpdate);
    await tvShow.save();

    disconnect();
    console.log('Episode successfully updated');
  } catch (err) {
    console.error(err);
  }
};

exports.listEpisodes = async tvShowObj => {
  try {
    const tvShow = await TVShow.findOne({
      tvShowObj,
    });
    tvShow.episodes.forEach(episode => console.log(episode));
    disconnect();
  } catch (err) {
    console.error(err);
  }
};

exports.deleteEpisode = async ({ title, episodeTitle }) => {
  try {
    const tvShow = await TVShow.findOne({
      title: title,
    });

    // Find episode, then find index and remove from array
    const episodeToUpdate = tvShow.episodes.find(
      episode => episode.episodeTitle === episodeTitle
    );
    const episodeIndex = tvShow.episodes.findIndex(
      episode => episode.episodeTitle === episodeTitle
    );
    tvShow.episodes.splice(episodeIndex, 1);

    await tvShow.save();

    disconnect();
    console.log('Episode successfully deleted');
  } catch (err) {
    console.error(err);
  }
};
