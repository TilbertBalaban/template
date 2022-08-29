import * as React from 'react';

import { screen, fireEvent } from '@testing-library/react';
import { PostsContainer } from '../../../views/containers/Posts';
import { renderWithProviders } from '../../utils';
// import userEvent from '@testing-library/user-event';

// jest.mock('axios');

// todo: add test for the rtk
describe('AsyncComponentTestExample.test', () => {
  test('test', async () => {
    // userEvent
    renderWithProviders(<PostsContainer />);
    const buttonElement = screen.getByTestId('add-posts-btn');
    expect(screen.queryByTestId('post-add-success-msg')).toBeNull();
    await fireEvent.click(buttonElement);
    // expect(screen.queryByTestId('post-add-success-msg')).toBeInTheDocument();
  });
});
