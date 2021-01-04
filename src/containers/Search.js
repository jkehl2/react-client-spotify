import { connect } from 'react-redux';

import Search from 'src/components/Search';

import { updateSearch, searchTrack } from 'src/store/actions';

const mapStateToProps = (state) => ({
  searchValue: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchValue: (search) => {
    dispatch(updateSearch(search));
  },
  handleSubmit: (search) => (event) => {
    event.preventDefault();
    dispatch(searchTrack(search));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
