import React, { useEffect } from 'react';
import { getMovies, selectMoviesLoading } from 'features/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import { animateScroll as scroll } from 'react-scroll';
import { selectMoviesArray } from 'features/moviesSlice';

import Loader from 'components/atoms/Loader/Loader';
import MovieList from 'components/organisms/MovieList/MovieList';
import Error from 'components/molecules/Error/Error';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';

const Discover = () => {
  const loadingStatus = useSelector(selectMoviesLoading);
  const dispatch = useDispatch();
  const location = useLocation();
  const { page } = queryString.parse(location.search);
  const { name } = useParams();
  const movies = useSelector(selectMoviesArray);

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      delay: 250,
    });
    const query = { name, page };
    dispatch(getMovies(query));
  }, [dispatch, page, name]);

  return (
    <>
      <StyledTitle>{name.replaceAll('_', ' ')}</StyledTitle>
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

export default Discover;
