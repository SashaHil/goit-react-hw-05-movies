import { useState } from 'react';
import { Button, Form, Input } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSearch = e => {
    setValue(e.currentTarget.value);
  };

  const handleSumbmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return console.error('Type something');
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSumbmit}>
      <Input type="text" name="query" value={value} onChange={handleSearch} />
      <Button type="submit">Search</Button>
    </Form>
  );
};
