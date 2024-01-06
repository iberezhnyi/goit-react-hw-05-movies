import api from './api';

const fetchPopularMovies = async () => {
  const { data } = await api('trending/movie/day');

  return data;
};

const fetchQueryMovies = async (query, page = 1) => {
  const { data } = await api('search/movie', {
    params: { query: query, page: page },
  });

  return data;
};

const fetchMovieDetail = async (movieId, filter = 'credits') => {
  const { data } = await api(`movie/${movieId}`, {
    params: { append_to_response: `${filter}` },
  });

  return data;
};

const fetchMovies = { fetchPopularMovies, fetchQueryMovies, fetchMovieDetail };

export default fetchMovies;
