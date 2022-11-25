import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import {
  getMovieDetails,
  getRecommendations,
  selectLoadingDetails,
  selectRecommendationsResults,
} from 'features/detailsSlice';
import Loader from 'components/atoms/Loader/Loader';
import Error from 'components/molecules/Error/Error';
import MovieDetails from 'components/organisms/MovieDetails/MovieDetails';
import { useVideos } from 'hooks/useVideos';

const Details = () => {
  const loadingStatus = useSelector(selectLoadingDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  const { page } = queryString.parse(location.search);
  const { results } = useSelector(selectRecommendationsResults);
  const { getVideos, setVideos, videos } = useVideos();

  useEffect(() => {
    dispatch(getMovieDetails(id));
    const query = { id, page };
    dispatch(getRecommendations(query));
  }, [dispatch, page, id]);

  useEffect(() => {
    (async () => {
      const { results } = await getVideos(id);
      setVideos(results);
    })();
  }, [getVideos, id, setVideos]);

  return (
    <div>
      {loadingStatus === 'pending' ? <Loader /> : null}
      {loadingStatus === 'rejected' ? <Error /> : null}
      {loadingStatus === 'resolved' ? (
        <MovieDetails results={results} videos={videos} />
      ) : null}
    </div>
  );
};

export default Details;
