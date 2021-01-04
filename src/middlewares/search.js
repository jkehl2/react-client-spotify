import {
  SEARCH_TRACK,
  updateTrackSearch,
} from 'src/store/actions';
import axios from 'axios';
import queryString from 'query-string';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === SEARCH_TRACK) {
    const {
      token,
      apiURL,
    } = store.getState();
    const url = queryString.stringifyUrl({
      url: apiURL,
      query: {
        q: action.search,
        type: action.typeSearch,
        market: action.marketSearch,
        limit: action.limitSearch,
        offset: action.offsetSearch,
      },
    });
    const config = {
      method: 'get',
      url,
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
