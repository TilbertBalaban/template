import ReactDOM from 'react-dom/client';
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

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
);
