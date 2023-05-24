import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Title } from 'components/MovieList/MovieList.styled';
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
      <Title>Trending today</Title>
      {status === 'responded' && <MovieList products={movie} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Oops, something went wrong...</h2>}
    </main>
  );
};

export default Home;
