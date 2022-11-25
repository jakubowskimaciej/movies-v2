import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDetailsData,
  selectRecommendationsResults,
} from 'features/detailsSlice';
import { selectConfigData } from 'features/configSlice';
import LazyLoad from 'react-lazyload';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Rating from '@mui/material/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLink,
  faCirclePlay,
  faVideoCamera,
  faPlus,
  faCircleDot,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

//components & styles
import { Button } from 'components/atoms/Button/Button';
import {
  StyledInfoTitle,
  GenreButton,
  GenreWrapper,
  ImageWrapper,
  LinkWrapper,
  MovieInfo,
  MovieTitle,
  Wrapper,
  MovieDetailsWrapper,
  InfoWrapper,
  RecommendedWrapper,
  StyledIframe,
  boxStyle,
} from './MovieDetails.styles';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import Loader from 'components/atoms/Loader/Loader';
import MovieList from '../MovieList/MovieList';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useModal } from 'hooks/useModal';

import { addMovie } from 'features/watchlistSlice';

//FontAwesome icons library
library.add(faLink, faCirclePlay, faVideoCamera, faPlus, faCircleDot);

const MovieDetails = ({ results = [], videos }) => {
  const { images } = useSelector(selectConfigData);
  const { page, total_pages } = useSelector(selectRecommendationsResults);
  const { isOpen, handleOpen, handleClose } = useModal();

  const dispatch = useDispatch();
  const movie = useSelector(selectDetailsData);

  const renderInfo = (lang, time, data) => {
    const info = [];
    if (!lang) return;
    if (lang.length !== 0) {
      info.push(lang[0].name);
    }
    info.push(time, data);
    return info
      .filter((el) => el !== null)
      .map((el) => (typeof el === 'number' ? `${el} min.` : el))
      .map((el, i, array) => (i !== array.length - 1 ? `${el} / ` : el));
  };

  const renderGenres = (genre) => {
    if (!genre) return;
    return genre.map(({ name, id }) => (
      <GenreButton key={id}>{name}</GenreButton>
    ));
  };

  const renderWebsite = (link) => {
    if (!link) return null;
    return (
      <Button as="a" href={movie.homepage} target="blank">
        <FontAwesomeIcon icon={faLink} style={{ marginRight: '5px' }} />
        Website
      </Button>
    );
  };

  const renderImdb = (id) => {
    if (!id) return null;
    return (
      <Button
        as="a"
        href={`https://www.imdb.com/title/${movie.imdb_id}`}
        target="blank"
      >
        <FontAwesomeIcon
          icon={faVideoCamera}
          style={{
            marginRight: '5px',
          }}
        />
        IMDB
      </Button>
    );
  };

  const renderTrailer = (video) => {
    if (video.length === 0) return;
    const { key } = video.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );

    return (
      <>
        <Button onClick={handleOpen}>
          <FontAwesomeIcon icon={faCirclePlay} style={{ marginRight: '5px' }} />
          Trailer
        </Button>
        <Modal open={isOpen} onClose={handleClose}>
          <Box sx={boxStyle}>
            <StyledIframe
              title="video player"
              src={`https://www.youtube.com/embed/${key}`}
              frameBorder="0"
            ></StyledIframe>
          </Box>
        </Modal>
      </>
    );
  };

  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <LazyLoadImage
            src={`${images.base_url}w780${movie.poster_path}`}
            alt={movie.title}
            width="350px"
            height="530px"
            effect="blur"
          />
        </ImageWrapper>
        <LazyLoad height={200} placeholder={<Loader />}>
          <MovieInfo>
            <MovieTitle>
              <StyledTitle isLarge>{movie.title}</StyledTitle>
              <p>{}</p>
            </MovieTitle>
            <MovieDetailsWrapper>
              <Rating
                name="read-only"
                value={movie.vote_average / 2}
                readOnly
                precision={0.5}
              />
              <p>{movie.vote_average.toFixed(1)} / 10</p>
              <p>
                {renderInfo(
                  movie.spoken_languages,
                  movie.runtime,
                  movie.release_date
                )}
              </p>
            </MovieDetailsWrapper>
            <InfoWrapper>
              <StyledInfoTitle as="h3">the genres:</StyledInfoTitle>
              <GenreWrapper>{renderGenres(movie.genres)}</GenreWrapper>
            </InfoWrapper>
            <InfoWrapper>
              <StyledInfoTitle as="h3">storyline:</StyledInfoTitle>
              <p>{movie.overview}</p>
            </InfoWrapper>
            <LinkWrapper>
              {renderWebsite(movie.homepage)}
              {renderTrailer(videos)}
              {renderImdb(movie.imdb_id)}
            </LinkWrapper>
            <Button isSecondary onClick={() => dispatch(addMovie(movie))}>
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
              Add to watchlist
            </Button>
          </MovieInfo>
        </LazyLoad>
      </Wrapper>
      <RecommendedWrapper>
        <StyledTitle>Recommended</StyledTitle>
        <StyledInfoTitle as="span">movies</StyledInfoTitle>
        <MovieList results={results} page={page} totalPages={total_pages} />
      </RecommendedWrapper>
    </>
  );
};

export default MovieDetails;
