import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

test('renders About page without crashing', () => {
  render(<About />);
  expect(screen.getByText('About Us')).toBeInTheDocument();
});

test('renders correct number of team members', () => {
  render(<About />);
  const teamMembers = screen.getAllByRole('img');
  expect(teamMembers).toHaveLength(5);
});
