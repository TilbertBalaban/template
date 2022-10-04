import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// use ApiProvider if you do not already have a Redux store.
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
import App from './App';
import { setupStore } from './redux/store';

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
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/test_url"
        element={<div data-testid="test_url">Test url</div>}
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
