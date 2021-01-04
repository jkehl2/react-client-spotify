// createStore provient du package redux
import { createStore, applyMiddleware } from 'redux';

// sert à afficher nos devtools redux
import { composeWithDevTools } from 'redux-devtools-extension';

// import de nos middlewares
import searchMiddleware from 'src/middlewares/search';

// on importe notre reducer
import reducer from './reducer';

// on crée l'instance de notre store
const store = createStore(
  reducer,
  // fait marcher les devtools
  composeWithDevTools(
    // On appel le middleware de recherche
    applyMiddleware(searchMiddleware),
  ),
);

export default store;
