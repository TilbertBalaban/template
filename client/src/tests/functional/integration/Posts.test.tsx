import * as React from 'react';

import { screen } from '@testing-library/react';
import { PostsContainer } from '../../../views/containers/Posts';
import { renderWithProviders } from '../../utils';
// import userEvent from '@testing-library/user-event';

test('test', () => {
  renderWithProviders(<PostsContainer />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toMatchSnapshot();
  //   screen.debug()
});
