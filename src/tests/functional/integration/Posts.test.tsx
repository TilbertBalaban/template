import * as React from 'react';

import { screen } from '@testing-library/react';
import { PostsContainer } from '../../../views/containers/Posts';
import { renderWithProviders } from '../../utils';

test('test', () => {
  renderWithProviders(<PostsContainer />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toMatchSnapshot();
  //   screen.debug()
});
