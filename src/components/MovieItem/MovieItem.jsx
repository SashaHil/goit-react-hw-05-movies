import { BackLink } from 'components/BackLink/BackLink';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './MovieItem.styled';

export const MovieItem = ({ product }) => {
  const { title, genres, original_title, overview, poster_path, vote_average } =
    product;

  const mainPoster = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const posterFake = `https://sd.keepcalms.com/i-w300/keep-calm-poster-not-found.jpg`;

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <>
      <BackLink to={backLinkRef.current}>Go back</BackLink>
      <Container>
        <img src={poster_path ? mainPoster : posterFake} alt={title} />
        <div>
          <h2>{title || original_title}</h2>
          <p>Use Score: {vote_average}</p>
          <b>Overview</b>
          <p>{overview}</p>
          <b>Genres:</b>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
        </div>
      </Container>
    </>
  );
};

MovieItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};
