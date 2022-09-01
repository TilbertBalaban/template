import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';
import { MockedProvider } from '@apollo/client/testing';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { setupStore } from '../../redux/store';
import type { AppStore, RootState } from '../../redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  const mocks: any[] = [];

  const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    return (
      <Provider store={store}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <MemoryRouter>{children}</MemoryRouter>
        </MockedProvider>
      </Provider>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
