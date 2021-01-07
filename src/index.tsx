import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient();

export const Entry = () => {
  const App = require('./App').default;
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};
