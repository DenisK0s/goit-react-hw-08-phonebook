//либы
import axios from 'axios';

//действия
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const breakPoints = {
  REGISTR: '/users/signup',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  // LOGOUT: '/users/logout',
};

const token = {};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post(breakPoints.REGISTR, credentials);

    dispatch(authActions.registerSuccess(response));
  } catch ({ message }) {
    dispatch(authActions.registerError(message));
  }
};
const logIn = credentials => async dispatch => {};
const logOut = () => dispatch => {};
const getCurrentUser = () => (dispatch, getState) => {};

const operationsExpObj = { register, logIn, logOut, getCurrentUser };

export default operationsExpObj;
