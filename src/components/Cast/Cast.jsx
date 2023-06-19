import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'service/api';
import { Item, List, Name, Text } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCredit = async () => {
      try {
        setStatus('pending');
        const data = await fetchMovieCredits(movieId);
        setCast(data);
        setStatus('responded');
      } catch {
        setStatus('rejected');
      }
    };

    getMovieCredit(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'responded' && (
        <List>
          {cast.map(
            ({ cast_id, name, character, profile_path, original_name }) => {
              return (
                <Item key={cast_id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : `https://sd.keepcalms.com/i-w200/keep-calm-poster-not-found.jpg`
                    }
                    alt={name}
                  />
                  <Name>{name || original_name}</Name>
                  <Text>Character: {character}</Text>
                </Item>
              );
            }
          )}
        </List>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Something went wrong...</h2>}
    </>
  );
};

export default Cast;
