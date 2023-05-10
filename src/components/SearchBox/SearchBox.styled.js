import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 4px 32px 4px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Button = styled.button`
  margin-left: 1px;
  color: white;
  background-color: grey;
  border: 0;
  border-radius: 4px;
  padding: 8px 8px 8px 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: orangered;
  }
`;
