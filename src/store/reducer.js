import {
  UPDATE_TOKEN, UPDATE_SEARCH, UPDATE_TRACKSEARCH,
} from './actions';

const initialState = {
  token: '',
  apiURL: 'https://api.spotify.com/v1/search',
  search: {
    filter: '',
    limitSearch: 10,
    totalPages: 0,
    currentPage: 1,
  },
  trackSearch: [],
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
        search: {
          ...oldState.search,
          filter: action.search,
        },
      };
    case UPDATE_TRACKSEARCH:
      return {
        ...oldState,
        trackSearch: action.trackSearch,
        search: {
          ...oldState.search,
          currentPage: action.currentPage,
          totalPages: action.totalPages,
        },
      };
    default:
      return { ...oldState };
  }
}

export default reducer;
