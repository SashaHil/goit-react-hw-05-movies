import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'service/api';

const Home = () => {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      setStatus('pending');
      const data = await fetchTrendingMovies();
      setMovie(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }
  };

  return (
    <main>
      <h1>Trending today</h1>
      {status === 'responded' && <MovieList products={movie} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Something went wrong...</h2>}
    </main>
  );
};

export default Home;
