import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 0 60px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 20px 0 8px 0;
  margin-bottom: 16px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
