import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
// use ApiProvider if you do not already have a Redux store.
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
import App from './App';
import { setupStore } from './redux/store';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
