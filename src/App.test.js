import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('Should render the NavBar component and all its content', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('header')).toBeInTheDocument();
  expect(getByTestId('navbar-logo')).toBeInTheDocument();
  expect(getByTestId('search-input')).toBeInTheDocument();
  expect(getByTestId('search-button')).toBeInTheDocument();
  expect(getByTestId('search-icon')).toBeInTheDocument();
});

it('Should update the query value on search input change event', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('search-input');

  fireEvent.change(input, { target: { value: 'notebook' } });

  expect(input.value).toBe('notebook');
});
