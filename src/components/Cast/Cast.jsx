import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import fetchMovies from 'api/fetchMovies';
import {
  ActorName,
  CastItem,
  CastList,
  CastStyled,
  Character,
} from './Cast.styled';

const { fetchMovieDetail } = fetchMovies;

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { credits } = await fetchMovieDetail(movieId, 'credits');

        setMovieCast(credits.cast);
      } catch (error) {
        console.log(error);
        toast.error(`Something went wrong. ${error.message}`);
        return;
      }
    };
    getMovieCast();
  }, [movieId]);

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  const imgDefaultUrl =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <CastStyled>
      {movieCast?.length === 0 ? (
        <p>There is no information</p>
      ) : (
        <CastList>
          {movieCast?.map(({ credit_id, name, character, profile_path }) => (
            <CastItem key={credit_id}>
              {profile_path ? (
                <img src={imgBaseUrl + profile_path} alt={name} />
              ) : (
                <img src={imgDefaultUrl} alt="Not found" />
              )}
              <ActorName>{name}</ActorName>
              <Character>
                Character:
                <br />
                {character}
              </Character>
            </CastItem>
          ))}
        </CastList>
      )}
    </CastStyled>
  );
};

export default Cast;
