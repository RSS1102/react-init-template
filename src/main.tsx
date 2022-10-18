import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from '@/Redux/store';
import AuthRoute from '@/router/config/AuthRoute';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthRoute>
        <App />
      </AuthRoute>
    </Provider>
  </React.StrictMode>,
);
