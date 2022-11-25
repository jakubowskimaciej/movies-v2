import React from 'react';
import Pagination from '../../molecules/Pagination/Pagination';
import MovieListItem from '../../molecules/MovieListItem/MovieListItem';
import { Wrapper } from './MovieList.styles';

const MovieList = ({ results = [], page, totalPages }) => {
  return (
    <>
      <Wrapper>
        {results.map((item) => (
          <MovieListItem
            key={item.id}
            movieData={item}
            navigateTo={`/movie/${item.id}`}
          />
        ))}
        ;
      </Wrapper>
      <Pagination page={page} total_pages={totalPages} />
    </>
  );
};

export default MovieList;
