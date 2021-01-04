// == IMPORTS NPM
import axios from 'axios';
import queryString from 'query-string';

// == IMPORT ACTIONS AXIOS
import {
  SEARCH_TRACK,
  updateTrackSearch,
} from 'src/store/actions';


// Middleware pour intercepter l'action SEARCH_TRACK
// et dialoguer avec l'API SEARCH de SPOTIFY
const searchMiddleware = (store) => (next) => (action) => {
  if (action.type === SEARCH_TRACK) {
    // On récupère le token de login et l'url de l'api depuis le store
    const {
      token,
      apiURL,
    } = store.getState();

    // On génère l'url et ses paramètre que requête avec le module queryString
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

    // On configure les paramètres d'appel de la requête axios
    const config = {
      method: 'get',
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // On exécute la requête axios
    axios(config)
      .then((response) => {
        // On converti la réponse de l'api en un tableau contenant uniquement les champs affichés
        const results = response.data.tracks.items.map((track) => {
          // On fabrique le champ artiste pour le composant card
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
        // On créé une nouvelle action pour mettre à jour le tableau de résultat.
        next(updateTrackSearch(results));
      })
      .catch((error) => {
        // en cas d'(erreur on affiche une log error)
        console.log(error);
      });
  }
  else {
    // Si l'action n'est pas SEARCH_TRACK on continu l'exécution vers le reducer.
    next(action);
  }
};

export default searchMiddleware;
