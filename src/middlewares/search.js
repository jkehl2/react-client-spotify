import {
  SEARCH_TRACK,
} from 'src/store/actions';
import axios from 'axios';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === SEARCH_TRACK) {
    const { token, apiURL } = store.getState();
    const config = {
      method: 'post', // on veut faire un post
      url: apiURL,
      data: {
        // TODO data api search
      },
    };

    axios(config) // on appelle axios avec cet objet de config
      .then((response) => { 
        // TODO search response
      })
      .catch((error) => { 
        console.log(error);
      });
  }
  next(action);
};

export default authMiddleware;
