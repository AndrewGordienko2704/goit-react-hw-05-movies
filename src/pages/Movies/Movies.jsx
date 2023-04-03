import { MovieList } from 'components/MovieList/MovieList';
import { NotFound } from 'components/NotFound/NotFound';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { movieSearch } from 'service/fetchApi';
import { Toaster } from 'react-hot-toast';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  Section,
  Input,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoader, setIsLoader] = useState(false);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null);

  useEffect(() => {
    if (searchParams.get('searchQuery') === null) return;
    const searchTitle = searchParams.get('searchQuery');
    setIsLoader(true);
    async function MoviesQuery() {
      try {
        const { results } = await movieSearch(searchTitle);
        if (results.length === 0) {
          setIsEmpty(true);
        }
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoader(false);
      }
    }

    MoviesQuery();
  }, [searchParams]);

  const handleOnChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error(`Something went wrong Try again 😭`);
      return;
    }
    setSearchParams({ searchQuery: query });

    setQuery('');
  };

  return (
    <>
      <Section>
        <SearchForm onSubmit={handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={query}
            onChange={handleOnChange}
          />
          <SearchFormButton type="submit">
            <BiSearchAlt2 />
            <SearchFormButtonLabel></SearchFormButtonLabel>
          </SearchFormButton>
        </SearchForm>
      </Section>
      {movies && <MovieList movies={movies} />}
      {isLoader}
      {isEmpty && <NotFound children={`Something went wrong Try again `} />}
      {error && (
        <NotFound children={`Something went wrong Try again later.`} />
      )}
      <Toaster
        position="top-center"
        toastOptions={{
          className: '',
          duration: 2000,
          style: {
            background: ' #99a4f7',
            color: '#fff',
            fontSize: '19px',
            fontWeight: '400',
          },
        }}
      />
    </>
  );
};
export default Movies;