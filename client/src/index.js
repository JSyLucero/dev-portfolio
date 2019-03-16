import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import { UserAuthProvider } from 'services';

import App from 'App';

ReactDOM.render((
  <UserAuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserAuthProvider>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}