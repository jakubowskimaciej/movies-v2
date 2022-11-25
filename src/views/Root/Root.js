import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { getConfig } from 'features/configSlice';
import { useDispatch } from 'react-redux';
import { getGenres } from 'features/moviesSlice';

import Error from 'components/molecules/Error/Error';
import Discover from 'views/Discover/Discover.js';
import Details from 'views/Details/Details';
import Genre from 'views/Genre/Genre';
import Watchlist from 'views/Watchlist/Watchlist';

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfig());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/discover/now_playing" />} />
      <Route path="discover/:name" element={<Discover />} />
      <Route path="genre/:name" element={<Genre />} />
      <Route path="movie/:id" element={<Details />} />
      <Route path="watchlist" element={<Watchlist />} />
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<Error />} />
    </Routes>
  );
};

export default Root;
