import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { updateToken } from 'src/store/actions';

const mapStateToProps = (state) => ({
  accessToken: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  setAccessToken: (token) => {
    dispatch(updateToken(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
