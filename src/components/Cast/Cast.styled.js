import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-flow: column wrap;
  width: 180px;
  height: 100%;
`;

export const Text = styled.p`
  width: 180px;
  color: white;
  text-align: center;
`;

export const Name = styled.p`
  font-weight: 500;
  text-align: center;
  margin: 5px 0;
  color: white;
`;

export const Image = styled.img`
  display: block;
  max-width: 215px;
  height: auto;
`;
