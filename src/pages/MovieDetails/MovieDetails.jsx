import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { movieDetailsGet } from 'service/fetchApi';
import {
  Container,
  Img,
  Title,
  Subject,
  Text,
  List,
  ListLink,
  Item,
  StyledLink,
  Box,
} from './MovieDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';
import { NotFound } from 'components/NotFound/NotFound';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setmovie] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;
    setIsLoader(true);
    const MovieDetailsList = async () => {
      try {
        const data = await movieDetailsGet(movieId);
        setmovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoader(false);
      }
    };
    MovieDetailsList();
  }, [movieId]);

  const {
    id,
    name,
    title,
    poster_path,
    release_date,
    overview,
    genres,
    vote_average,
  } = movie;
  const Img_url = 'https://image.tmdb.org/t/p/w500';

  return (
    <section>
      <BackLink to={backLinkHref}>Go back to movies</BackLink>
      {isLoader}
      {error && (
        <NotFound children={`Something went wrong Try again later.`} />
      )}
      {!error && (
        <Container id={id}>
          <div>
            <Img src={Img_url + poster_path} alt={name ?? title} />
          </div>
          <div>
            <Title>{name ?? title}</Title>
            {release_date && (
              <Subject>The premiere of the film {`${release_date}`}</Subject>
            )}
            <Subject>User score: {Math.round(vote_average * 10)}%</Subject>
            <Subject>Overview</Subject>
            <Text>{overview}</Text>
            <Subject>Genres:</Subject>
            <List>
              {genres &&
                genres.map(({ id, name }) => <Item key={id}>{name}</Item>)}
            </List>
            <Subject>Additional information</Subject>
            <ListLink>
              <li>
                <StyledLink to="cast" state={{ from: location.state?.from }}>
                  Cast
                </StyledLink>
              </li>
              <li>
                <StyledLink to="reviews" state={{ from: location.state?.from }}>
                  Reviews
                </StyledLink>
              </li>
            </ListLink>
          </div>
        </Container>
      )}

      <Suspense fallback={<Box>Loading subpage...</Box>}>
        <Outlet />
      </Suspense>
    </section>
  );
};
export default MovieDetails;