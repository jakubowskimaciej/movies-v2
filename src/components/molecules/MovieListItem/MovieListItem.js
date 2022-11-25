import React from 'react';
import { useSelector } from 'react-redux';
import { selectConfigData } from 'features/configSlice';
import { InfoWrapper, StyledLink, Wrapper } from './MovieListItem.styles';
import Blank from 'assets/blank.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rating from '@mui/material/Rating';

const MovieListItem = ({
  movieData: { title, poster_path, vote_average },
  navigateTo,
}) => {
  const { images } = useSelector(selectConfigData);

  return (
    <Wrapper>
      <StyledLink to={navigateTo}>
        <LazyLoadImage
          height="330px"
          width="100%"
          src={`${images.base_url}w342${poster_path}`}
          alt={title}
          effect="blur"
          style={{
            borderRadius: '16px',
          }}
          onError={(e) => {
            if (e.target.src !== `${Blank}`) {
              e.target.src = `${Blank}`;
            }
          }}
        />
        <InfoWrapper>
          <h2>{title}</h2>
          <Rating
            name="read-only"
            value={vote_average / 2}
            readOnly
            precision={0.5}
            style={{ fontSize: '2.25rem', color: 'var(--color-darkGrey)' }}
          />
        </InfoWrapper>
      </StyledLink>
    </Wrapper>
  );
};

export default MovieListItem;
