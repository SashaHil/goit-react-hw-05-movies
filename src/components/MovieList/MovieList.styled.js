import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const FilmName = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
