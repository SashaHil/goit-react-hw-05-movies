import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form, Input } from './SearchBox.styled';
import { toast } from 'react-toastify';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSumbmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.error('Type something!');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSumbmit}>
      <Input
        type="text"
        name="query"
        placeholder="Search movies"
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBox.propTypes = { onSubmit: PropTypes.func.isRequired };
