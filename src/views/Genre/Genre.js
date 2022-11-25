import {
  getMoviesByGenre,
  selectGenresData,
  selectMoviesByGenre,
  selectMoviesLoading,
} from 'features/moviesSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import Loader from 'components/atoms/Loader/Loader';
import MovieList from 'components/organisms/MovieList/MovieList';
import Error from 'components/molecules/Error/Error';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';

const Genre = () => {
  const location = useLocation();
  const { page } = queryString.parse(location.search);
  const { name } = useParams();
  const movies = useSelector(selectMoviesByGenre);
  const dispatch = useDispatch();
  const genres = useSelector(selectGenresData);
  const loadingStatus = useSelector(selectMoviesLoading);

  useEffect(() => {
    const query = { name, genres, page };
    dispatch(getMoviesByGenre(query));
  }, [dispatch, name, genres, page]);

  return (
    <>
      <StyledTitle>{name}</StyledTitle>
      {loadingStatus === 'pending' ? <Loader /> : null}
      {loadingStatus === 'rejected' ? <Error /> : null}
      {loadingStatus === 'resolved' ? (
        <MovieList
          results={movies.results}
          page={movies.page}
          totalPages={movies.total_pages}
        />
      ) : null}
    </>
  );
};

export default Genre;
