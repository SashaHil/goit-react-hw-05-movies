import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 4px 32px 4px 8px;
  border-radius: 4px;
  outline: transparent;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font: inherit;

  &:hover,
  &:focus {
    border-color: orangered;
  }
`;

export const Button = styled.button`
  margin-left: 1px;
  color: white;
  background-color: grey;
  border: 0;
  border-radius: 4px;
  padding: 8px 8px 8px 8px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: orangered;
  }
`;
