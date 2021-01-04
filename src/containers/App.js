import { connect } from 'react-redux';

import App from 'src/components/App';

import { searchTrack } from 'src/store/actions';

const mapStateToProps = (state) => ({
  search: state.search.filter,
  totalPages: state.search.totalPages,
  currentPage: state.search.currentPage,
  limitSearch: state.search.limitSearch,
});

const mapDispatchToProps = (dispatch) => ({
  onPageChange: (search, currentPage, limitSearch) => {
    dispatch(searchTrack(search, currentPage, limitSearch));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
