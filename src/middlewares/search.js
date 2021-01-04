import {
  SEARCH_TRACK,
  updateTrackSearch,
} from 'src/store/actions';
import axios from 'axios';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === SEARCH_TRACK) {
    const {
      token,
      apiURL,
    } = store.getState();
    const config = {
      method: 'get',
      url: `${apiURL}q=${action.search}&type=track&market=FR&limit=10&offset=0`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        const results = response.data.tracks.items.map((track) => {
          let artists = '';
          track.artists.forEach((artist) => {
            if (artists.length !== 0) {
              artists = `${artists}, ${artist.name}`;
            }
            else {
              artists = `${artist.name}`;
            }
          });

          return {
            id: track.id,
            // eslint-disable-next-line max-len
            imageUrl: track.album.images && track.album.images.length > 0 && track.album.images[0].url,
            name: track.name,
            artists,
            preview_url: track.preview_url ? track.preview_url : '',
            playing: false,
          };
        });
        next(updateTrackSearch(results));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  else {
    next(action);
  }
};

export default authMiddleware;
