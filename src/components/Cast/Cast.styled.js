import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  padding: 0;

  list-style: none;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 60px) / 5);
`;

export const Text = styled.p`
  width: 200px;

  margin-right: 0;
`;
