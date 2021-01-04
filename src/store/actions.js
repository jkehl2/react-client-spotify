/* eslint-disable object-shorthand */

export const SEARCH_TRACK = 'SEARCH_TRACK';

export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_TRACKSEARCH = 'UPDATE_TRACKSEARCH';

/**
 * @function searchTrack Action interrogation de l'api pour les pistes audio
 * @param {String} search Filtre de recherche
 */
export const searchTrack = (search) => ({
  type: SEARCH_TRACK,
  search,
  typeSearch: 'track',
  marketSearch: 'FR',
  limitSearch: 10,
  offsetSearch: 0,
});

/**
 * @function updateToken Action mise à jour du token de login
 * @param {String} token Token de login
 */
export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});

/**
 * @function updateSearch Action mise à jour du filtre de recherche
 * @param {String} search Filtre de recherche
 */
export const updateSearch = (search) => ({
  type: UPDATE_SEARCH,
  search,
});

/**
 * @function updateTrackSearch Action mise à jour du résultat de recherche
 * @param {Array} trackSearch Tableau de résultats de recherche
 */
export const updateTrackSearch = (trackSearch) => ({
  type: UPDATE_TRACKSEARCH,
  trackSearch,
});
