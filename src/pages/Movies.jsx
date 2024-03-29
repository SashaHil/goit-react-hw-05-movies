import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'service/api';

const Movies = () => {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query !== '') {
      getMoviesBySearch(query);
    }
  }, [searchParams]);

  const getMoviesBySearch = async query => {
    try {
      setStatus('pending');
      const data = await fetchMoviesBySearch(query);
      if (data.length === 0) {
        setStatus('rejected');
        return;
      }
      setMovie(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }
  };

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <SearchBox onSubmit={handleSubmit} />
      {status === 'responded' && <MovieList products={movie} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Oops, something went wrong...</h2>}
    </main>
  );
};

export default Movies;
