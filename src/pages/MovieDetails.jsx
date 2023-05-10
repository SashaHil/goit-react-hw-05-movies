import { MovieItem } from 'components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMoviesById(movieId);
  }, [movieId]);

  const getMoviesById = async movieId => {
    try {
      setStatus('pending');
      const data = await fetchMovieDetails(movieId);
      console.log(data);
      setSelectedMovie(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }
  };

  return (
    <main>
      {status === 'responded' && <MovieItem product={selectedMovie} />}
      {status === 'pending' && <div>Loading...</div>}
      {status === 'rejected' && <h2>Something went wrong...</h2>}

      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
