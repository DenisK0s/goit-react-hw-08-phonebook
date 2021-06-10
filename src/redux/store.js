import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { phonebookReducer } from './phonebook';
import { authReducer } from './auth';

import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    auth: authReducer,
    phonebook: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
