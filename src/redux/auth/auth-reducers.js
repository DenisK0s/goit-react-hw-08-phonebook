// модули
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

//действия
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {});
const token = createReducer('', {});
const error = createReducer('', {});

export default combineReducers({ user, token, error });
