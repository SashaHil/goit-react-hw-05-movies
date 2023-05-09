import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Link } from './MovieList.styled';

export const MovieList = ({ products }) => {
  const location = useLocation();

  return (
    <List>
      {products.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>{title || name}</p>
          </Link>
        </li>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
