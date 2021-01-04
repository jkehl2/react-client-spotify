import { connect } from 'react-redux';

import TrackResults from 'src/components/TrackResults';

const mapStateToProps = (state) => ({
  results: state.trackSearch,
});

export default connect(mapStateToProps)(TrackResults);
