import { useCallback, useState } from 'react';
import tmdb from 'api/tmdb';

export const useVideos = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = useCallback(async (id) => {
    try {
      const { data } = await tmdb.get(`/movie/${id}/videos`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return {
    getVideos,
    videos,
    setVideos,
  };
};
