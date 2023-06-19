import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding-bottom: 30px;
`;

export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;

  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  color: white;
`;

export const FilmName = styled.p`
  width: 300px;
  padding: 4px;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Image = styled.img`
  display: block;
  width: 316px;
  height: 466px;
  transition: transform 0.3s linear;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
