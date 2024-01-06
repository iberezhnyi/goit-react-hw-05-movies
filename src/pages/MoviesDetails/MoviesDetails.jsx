import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import fetchMovies from 'api/fetchMovies';
import { ButtonStyled } from 'components/Button/Button.styled';
import Loader from 'components/Loader/Loader';
import {
  GenresTitle,
  LinkStyled,
  MovieDescription,
  MovieDetails,
  MovieInfo,
  MovieTitle,
  Overview,
  OverviewTitle,
  Thumb,
  ThumbList,
  ThumbTitle,
  UserScore,
} from './MovieDetails.styled';

const { fetchMovieDetail } = fetchMovies;

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  // const backLink = location.state?.from ?? '/';
  const navigate = useNavigate();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const results = await fetchMovieDetail(movieId);

        setMovie(results);
      } catch (error) {
        console.log(error);
        toast.error(`Something went wrong. ${error.message}`);
        return;
      }
    };
    getMovie();
  }, [movieId]);

  const handleBack = () => {
    navigate(backLink.current);
    // navigate(backLink);
  };

  if (!movie) return;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  const imgDefaultUrl =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const { title, release_date, poster_path, overview, vote_average, genres } =
    movie;

  return (
    <MovieDetails>
      <ButtonStyled onClick={handleBack}>Go back</ButtonStyled>
      <MovieInfo>
        <img
          src={poster_path ? `${imgBaseUrl + poster_path}` : imgDefaultUrl}
          width={250}
          alt="poster"
        />
        <MovieDescription>
          <MovieTitle>
            {title} ({release_date.slice(0, 4)})
          </MovieTitle>
          <UserScore>User Score: {Math.round(vote_average * 10)}%</UserScore>
          <OverviewTitle>Overview</OverviewTitle>
          <Overview>{overview}</Overview>
          <GenresTitle>Genres</GenresTitle>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </MovieDescription>
      </MovieInfo>

      <Thumb>
        <ThumbTitle>Additional information</ThumbTitle>
        <ThumbList>
          <li>
            <LinkStyled to="cast">Cast</LinkStyled>
          </li>
          <li>
            <LinkStyled to="reviews">Reviews</LinkStyled>
          </li>
        </ThumbList>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Thumb>
    </MovieDetails>
  );
};

export default MoviesDetails;

// state={{ from: backLink }}
