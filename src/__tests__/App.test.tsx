import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders react logo', () => {
  render(<App />);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});
