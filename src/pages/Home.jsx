import { movieTrendingGet } from 'service/fetchApi';
import { useState, useEffect } from 'react';

import { MovieList } from 'components/MovieList/MovieList';
import { NotFound } from 'components/NotFound/NotFound';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoader(true);
    const movieTrending = async () => {
      try {
        const { results } = await movieTrendingGet();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoader(false);
      }
    };
    movieTrending();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
      {isLoader}
      {error && (
        <NotFound children={`Something went wrong Try again later.`} />
      )}
    </>
  );
};
export default Home;
