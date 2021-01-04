import { connect } from 'react-redux';

import Search from 'src/components/Search';

import { updateSearch, searchTrack } from 'src/store/actions';

const mapStateToProps = (state) => ({
  searchValue: state.search.filter,
  limitSearch: state.search.limitSearch,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchValue: (search) => {
    dispatch(updateSearch(search));
  },
  handleSubmit: (search, limitSearch) => (event) => {
    event.preventDefault();
    dispatch(searchTrack(search, 1, limitSearch));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
