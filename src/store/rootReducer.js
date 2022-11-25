import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import configSlice from 'features/configSlice';
import moviesSlice from 'features/moviesSlice';
import detailsSlice from 'features/detailsSlice';
import watchlistSlice from 'features/watchlistSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['config', 'watchlist'],
};

export const rootReducer = combineReducers({
  config: configSlice,
  movies: moviesSlice,
  details: detailsSlice,
  watchlist: watchlistSlice,
});

export default persistReducer(persistConfig, rootReducer);
