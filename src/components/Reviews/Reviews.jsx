import { NotFound } from 'components/NotFound/NotFound';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsGet } from 'service/fetchApi';
import { ListReviews } from './ListReviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const ReviewsList = async () => {
      try {
        const { results } = await reviewsGet(movieId);
        if (results.length === 0) {
          setIsEmpty(true);
        }
        setReviews(results);
      } catch (error) {
        setError(error.message);
      }
    };
    ReviewsList();
  }, [movieId]);
  return (
    <>
      {isEmpty && (
        <NotFound children={`We don't have any reviews for this movie`} />
      )}
      {error && (
        <NotFound children={`Something went wrong Try again later.`} />
      )}

      {!isEmpty && !error && <ListReviews reviews={reviews} />}
    </>
  );
};

export default Reviews;
