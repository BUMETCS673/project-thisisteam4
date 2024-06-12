import Dashboard from './Dashboard';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Dashboard', () => {
  test('renders Dashbaord', () => {
    render(<Dashboard />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();

    expect(screen.getByText('(10) Projects')).toBeInTheDocument();

    const projectCards = screen.getAllByRole('article');
    expect(projectCards.length).toBe(10);
  });
});
