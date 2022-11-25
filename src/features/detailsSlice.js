import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import tmdb from 'api/tmdb';

const initialState = {
  details: [],
  recommended: [],
  status: 'idle',
  error: null,
};

export const getMovieDetails = createAsyncThunk(
  'details/getMovieDetails',
  async (id) => {
    const data = await tmdb.get(`/movie/${id}`);
    return data;
  }
);

export const getRecommendations = createAsyncThunk(
  'details/getRecommendations',
  async (query) => {
    const { id, page } = query;
    const { data } = await tmdb.get(`/movie/${id}/similar`, {
      params: {
        page,
      },
    });
    return data;
  }
);

const detailsSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetails.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.details = action.payload;
      })
      .addCase(getRecommendations.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getRecommendations.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(getRecommendations.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.recommended = action.payload;
      });
  },
});

export const selectDetailsResults = (state) => state.details;

export const selectDetailsData = createSelector(
  [selectDetailsResults],
  (detailsSlice) => detailsSlice.details.data
);

export const selectRecommendationsResults = createSelector(
  [selectDetailsResults],
  (detailsSlice) => detailsSlice.recommended
);

export const selectLoadingDetails = createSelector(
  [selectDetailsResults],
  (detailsSlice) => detailsSlice.status
);

export default detailsSlice.reducer;
