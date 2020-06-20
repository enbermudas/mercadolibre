import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react';
import App from './App';

// Navbar render

it('Should render the NavBar component and all its content', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('navbar-logo')).toBeInTheDocument();
  expect(screen.getByTestId('search-input')).toBeInTheDocument();
  expect(screen.getByTestId('search-button')).toBeInTheDocument();
  expect(screen.getByTestId('search-icon')).toBeInTheDocument();
});

// Search input fill

it('Should update the query value on search input change event', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const input = screen.getByTestId('search-input');
  fireEvent.change(input, { target: { value: 'notebook' } });

  expect(input.value).toBe('notebook');
});

// Categories breadcrumbs

// it('Should render the categories breadcrumbs if a valid search has been made', async () => {
//   render(
//     <Router>
//       <App />
//     </Router>
//   );

//   const input = screen.getByTestId('search-input');
//   fireEvent.change(input, { target: { value: 'ipod' } });

//   const button = screen.getByTestId('search-button');
//   fireEvent.click(button);

//   await waitFor(() => {
//     expect(screen.queryByTestId('loading')).toBeInTheDocument();
//   });
// });
