import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import fetchMovies from 'api/fetchMovies';
import {
  ReviewAuthor,
  ReviewContent,
  ReviewDate,
  ReviewsList,
  ReviewsListItem,
  ReviewsStyled,
} from './Reviews.styled';

const { fetchMovieDetail } = fetchMovies;

const Reviews = () => {
  const [movieReview, setMovieReview] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReview = async () => {
      try {
        const { reviews } = await fetchMovieDetail(movieId, 'reviews');

        setMovieReview(reviews.results);
      } catch (error) {
        console.log(error);
        toast.error(`Something went wrong. ${error.message}`);
        return;
      }
    };
    getMovieReview();
  }, [movieId]);

  return (
    <ReviewsStyled>
      {movieReview?.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ReviewsList>
          {movieReview?.map(({ id, author, created_at, content }) => (
            <ReviewsListItem key={id}>
              <ReviewAuthor>{author}</ReviewAuthor>
              <p>
                <ReviewDate>
                  {new Date(created_at).toLocaleDateString()}
                </ReviewDate>
              </p>
              <ReviewContent>{content}</ReviewContent>
            </ReviewsListItem>
          ))}
        </ReviewsList>
      )}
    </ReviewsStyled>
  );
};

export default Reviews;
