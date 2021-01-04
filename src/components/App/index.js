// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import Login from 'src/containers/Login';
import Search from 'src/containers/Search';
import TrackResults from 'src/containers/TrackResults';

import 'semantic-ui-css/semantic.min.css';
import './app.scss';
import { Pagination } from 'semantic-ui-react';

// == Composant
const App = ({
  search, totalPages, currentPage, limitSearch, onPageChange,
}) => (
  <div className="app">
    <Login />
    <Search placeholder="Chercher une chanson" />
    {totalPages > 1 && (
    <Pagination
      defaultActivePage={currentPage}
      totalPages={totalPages}
      onPageChange={(_, data) => {
        onPageChange(search, data.activePage, limitSearch);
      }}
    />
    )}
    <TrackResults />
  </div>
);

App.propTypes = {
  search: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  limitSearch: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

// == Export
export default App;
