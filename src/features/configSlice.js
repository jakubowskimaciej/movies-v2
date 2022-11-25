import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import tmdb from 'api/tmdb';

const configInitialState = {
  config: {},
  status: 'idle',
  error: null,
};

export const getConfig = createAsyncThunk('config/GET_CONFIG', async () => {
  const response = await tmdb.get('/configuration');
  return response;
});

const configSlice = createSlice({
  name: 'config',
  initialState: configInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getConfig.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getConfig.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(getConfig.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.config = action.payload;
      });
  },
});

export const selectConfig = (state) => state.config;

export const selectConfigResponse = createSelector(
  [selectConfig],
  (configSlice) => configSlice.config
);

export const selectConfigData = createSelector(
  [selectConfig],
  (configSlice) => configSlice.config.data
);

export const selectConfigStatus = createSelector(
  [selectConfig],
  (configSlice) => configSlice.status
);

export default configSlice.reducer;
