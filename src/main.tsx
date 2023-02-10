import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import AuthRoute from '@/router/config/AuthRoute';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthRoute />
    </Provider>
  </React.StrictMode>,
);
