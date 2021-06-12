//либы
import axios from 'axios';

//действия
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const breakPoints = {
  REGISTR: '/users/signup',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  CURRENT_USER: '/users/current',
};

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post(breakPoints.REGISTR, credentials);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch ({ message }) {
    dispatch(authActions.registerError(message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post(breakPoints.LOGIN, credentials);
    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch ({ message }) {
    dispatch(authActions.loginError(message));
  }
};
const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post(breakPoints.LOGOUT);
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch ({ message }) {
    dispatch(authActions.logoutError(message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get(breakPoints.CURRENT_USER);
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch ({ message }) {
    dispatch(authActions.logoutError(message));
  }
};

const operationsExpObj = { register, logIn, logOut, getCurrentUser };

export default operationsExpObj;
