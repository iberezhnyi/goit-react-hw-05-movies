import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import fetchMovies from 'api/fetchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import { Main, PopularTitle } from './Home.styled';

const { fetchPopularMovies } = fetchMovies;

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await fetchPopularMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
        toast.error(`Something went wrong. ${error.message}`);
        return;
      }
    };
    getMovies();
  }, []);

  return (
    <>
      {movies && (
        <Main>
          <PopularTitle>Trending today</PopularTitle>
          <MoviesList movies={movies} path={'movies/'}></MoviesList>
        </Main>
      )}
    </>
  );
};

export default Home;
