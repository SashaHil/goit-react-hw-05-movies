import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/api';
import { List } from './Reviews.styled';

const Reviews = () => {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setStatus('pending');
        const data = await fetchMovieReviews(movieId);
        setResults(data);
        setStatus('responded');
      } catch {
        setStatus('rejected');
      }
    };

    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'responded' && results.length === 0 ? (
        <h2>There are no reviews</h2>
      ) : (
        <List>
          {results.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </List>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Something went wrong...</h2>}
    </>
  );
};

export default Reviews;
