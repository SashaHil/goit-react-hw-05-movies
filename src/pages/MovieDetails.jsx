import { MovieItem } from 'components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { List, Link } from 'components/MovieList/MovieList.styled';
import { fetchMovieDetails } from 'service/api';
import { Loader } from 'components/Loader/Loader';

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

  return (
    <main>
      {status === 'responded' && <MovieItem product={selectedMovie} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Something went wrong...</h2>}

      <h3>Additional information</h3>
      <List>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </List>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
