import { MovieItem } from 'components/MovieItem/MovieItem';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { List, Link, Title } from 'components/MovieList/MovieList.styled';
import { fetchMovieDetails } from 'service/api';
import { Loader } from 'components/Loader/Loader';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from 'components/BackLink/BackLink.styled';

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesById(movieId);
  }, [movieId]);

  const getMoviesById = async movieId => {
    try {
      setStatus('pending');
      const data = await fetchMovieDetails(movieId);
      setSelectedMovie(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }
  };

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <main>
      <StyledLink to={backLinkRef.current}>
        <HiArrowLeft size="24" />
        Go back
      </StyledLink>
      {status === 'responded' && <MovieItem product={selectedMovie} />}

      <Title>Additional information</Title>
      <List>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </List>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Oops, something went wrong...</h2>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
