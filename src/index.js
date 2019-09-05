import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Auth0Provider from './Auth0Provider';
import { Provider } from 'react-redux';
import store from './store';

render(
  <Auth0Provider
    domain="jackmcconnell.auth0.com"
    client_id="2AT4Hzdi8UTX6regFGXuYPmwym2sh9MW"
    redirect_uri="http://localhost:7890"
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);
