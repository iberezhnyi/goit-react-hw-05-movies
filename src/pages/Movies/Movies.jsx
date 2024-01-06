import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import fetchMovies from 'api/fetchMovies';
import SearchMovieForm from 'components/Forms/SearchMovieForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { MoviesStyled } from './Movies.styled';

const { fetchQueryMovies } = fetchMovies;

const Movies = () => {
  const [movies, setMovies] = useState(null);

  const [searchParams] = useSearchParams();

  const handleSubmit = useCallback(async query => {
    try {
      const { results } = await fetchQueryMovies(query);

      setMovies(results);
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong. ${error.message}`);
      return;
    }
  }, []);

  useEffect(() => {
    const query = searchParams.get('query');
    handleSubmit(query);
  }, [handleSubmit, searchParams]);

  return (
    <MoviesStyled>
      <SearchMovieForm />
      {movies && <MoviesList movies={movies} />}
    </MoviesStyled>
  );
};

export default Movies;
