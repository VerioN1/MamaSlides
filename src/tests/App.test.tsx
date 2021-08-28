import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders checkbox', () => {
  render(<App />);
  const checkboxEl = screen.getByRole('checkbox');
  fireEvent.click(checkboxEl);
  expect(checkboxEl).toBeChecked();
});
