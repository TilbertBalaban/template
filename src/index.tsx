import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// use ApiProvider if you do not already have a Redux store.
// import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { SpyingFrog } from 'views/containers/SpyingFrog/SpyingFrog';
import { VehiclesContainer } from 'views/containers/Vehicles';
import { ItemsContainer } from 'views/containers/Items';
import { PostsContainer } from 'views/containers/Posts';
import { GraphQlAndApolloExample } from 'views/containers/GraphQlAndApolloExample';
import App from 'App';

import { HeaderContainer } from 'views/containers/Header/Header';

import { setupStore } from 'redux/store';
import { paths } from 'utils/urls';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const Router = () => (
  <BrowserRouter>
    <HeaderContainer />
    <Routes>
      <Route path={paths.Homepage} element={<App />} />
      <Route path={paths.SpyingFrog} element={<SpyingFrog />} />
      <Route path={paths.RtkCreateApi} element={<VehiclesContainer />} />
      <Route path={paths.RtkCreateAsyncThunk} element={<ItemsContainer />} />
      <Route path={paths.RtkCreateApiPost} element={<PostsContainer />} />
      <Route
        path={paths.GraphQLAndApollo}
        element={<GraphQlAndApolloExample />}
      />
    </Routes>
  </BrowserRouter>
);

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </Provider>,
);
