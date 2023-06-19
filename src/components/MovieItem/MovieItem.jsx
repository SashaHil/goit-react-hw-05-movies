import PropTypes from 'prop-types';
import {
  Container,
  AdditionalText,
  OverviewText,
  Title,
} from './MovieItem.styled';

export const MovieItem = ({ product }) => {
  const { title, genres, original_title, overview, poster_path, vote_average } =
    product;

  const mainPoster = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const posterFake = `https://sd.keepcalms.com/i-w300/keep-calm-poster-not-found.jpg`;

  return (
    <>
      <Container>
        <img src={poster_path ? mainPoster : posterFake} alt={title} />
        <div>
          <Title>{title || original_title}</Title>
          <OverviewText>Use Score: {vote_average}</OverviewText>
          <AdditionalText>Overview</AdditionalText>
          <OverviewText>{overview}</OverviewText>
          <AdditionalText>Genres:</AdditionalText>
          <AdditionalText>
            {genres.map(({ name }) => name).join(', ')}
          </AdditionalText>
        </div>
      </Container>
    </>
  );
};

MovieItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};
