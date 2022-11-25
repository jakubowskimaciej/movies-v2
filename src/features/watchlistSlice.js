const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  watchlist: [],
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.watchlist.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.watchlist = state.watchlist.filter(
        ({ id }) => id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = watchlistSlice.actions;

export default watchlistSlice.reducer;
