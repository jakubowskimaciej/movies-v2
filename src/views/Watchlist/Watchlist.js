import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMovie } from 'features/watchlistSlice';
import MovieList from 'components/organisms/MovieList/MovieList';

const Watchlist = () => {
  const movies = useSelector((state) => state.watchlist.watchlist);
  const dispatch = useDispatch();

  console.log(movies);

  return (
    <div>
      <h1>watchlist view</h1>
      <MovieList results={movies} />
    </div>
  );
};

export default Watchlist;
