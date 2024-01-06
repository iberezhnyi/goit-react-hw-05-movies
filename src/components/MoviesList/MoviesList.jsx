import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  LinkStyled,
  MovieItem,
  MovieName,
  MoviesListStyled,
} from './MoviesList.styled';

const MoviesList = ({ movies, path = '' }) => {
  const location = useLocation();

  return (
    <MoviesListStyled>
      {movies?.map(({ id, title }) => (
        <MovieItem key={id}>
          <LinkStyled to={`${path + id}`} state={{ from: location }}>
            <MovieName>{title}</MovieName>
          </LinkStyled>
        </MovieItem>
      ))}
    </MoviesListStyled>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string,
};
