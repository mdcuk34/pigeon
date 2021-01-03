import React from 'react';
import {Provider} from 'react-redux';

import {store} from './redux';

export const Entry = () => {
  const App = require('./App').default;
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
