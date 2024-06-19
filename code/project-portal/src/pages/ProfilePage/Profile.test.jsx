import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Profile from './Profile';
import userReducer from '../../store/userSlice';

describe('Profile component', () => {
  it('renders profile image', () => {
    const mockStore = configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState: {
        user: {
          user: {
            username: 'testUser',
          },
        },
      },
    });

    render(
      <Provider store={mockStore}>
        <Profile />
      </Provider>
    );

    const imgElement = screen.getByAltText(/Profile/i);
    expect(imgElement).toBeInTheDocument();
  });
});
