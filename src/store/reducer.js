import {
  UPDATE_TOKEN, UPDATE_SEARCH, UPDATE_TRACKSEARCH,
} from './actions';

const initialState = {
  token: '',
  search: '',
  trackSearch: [],
  apiURL: 'https://api.spotify.com/v1/search?',
};

function reducer(oldState = initialState, action) {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...oldState,
        token: action.token,
      };
    case UPDATE_SEARCH:
      return {
        ...oldState,
        search: action.search,
      };
    case UPDATE_TRACKSEARCH:
      return {
        ...oldState,
        trackSearch: action.trackSearch,
      };
    default:
      return { ...oldState };
  }
}

export default reducer;
