import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import tmdb from 'api/tmdb';

const moviesInitialState = {
  movies: [],
  genres: [],
  moviesByGenre: [],
  movieDetails: [],
  status: 'idle',
  error: null,
};

export const getMovies = createAsyncThunk('movies/getMovies', async (query) => {
  const { name, page } = query;
  const { data } = await tmdb.get(`/movie/${name}`, {
    params: {
      page,
    },
  });
  return data;
});

export const getGenres = createAsyncThunk('/movies/getGenres', async () => {
  const { data } = await tmdb.get('/genre/movie/list');
  return data.genres;
});

export const getMoviesByGenre = createAsyncThunk(
  'movies/getByGenre',
  async (query) => {
    const { name, genres, page } = query;
    const genreId = genres
      .filter((el) => el.name === name)
      .map((el) => el.id)
      .join('');
    const { data } = await tmdb.get('/discover/movie', {
      params: {
        with_genres: genreId,
        page,
      },
    });
    return data;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.movies = action.payload;
      })
      .addCase(getGenres.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.genres = action.payload;
      })
      .addCase(getMoviesByGenre.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getMoviesByGenre.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(getMoviesByGenre.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.moviesByGenre = action.payload;
      });
  },
});

export const selectMoviesResults = (state) => state.movies;

export const selectMoviesArray = createSelector(
  [selectMoviesResults],
  (moviesSlice) => moviesSlice.movies
);

export const selectGenresData = createSelector(
  [selectMoviesResults],
  (moviesSlice) => moviesSlice.genres
);

export const selectMoviesByGenre = createSelector(
  [selectMoviesResults],
  (moviesSlice) => moviesSlice.moviesByGenre
);

export const selectMoviesLoading = createSelector(
  [selectMoviesResults],
  (moviesSlice) => moviesSlice.status
);

export default moviesSlice.reducer;
