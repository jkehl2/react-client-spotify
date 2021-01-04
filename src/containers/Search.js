import { connect } from 'react-redux';

import Search from 'src/components/Search';

import { updateSearch } from 'src/store/actions';

const mapStateToProps = (state) => ({
  searchValue: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchValue: (search) => {
    dispatch(updateSearch(search));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
