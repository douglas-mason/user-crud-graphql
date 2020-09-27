import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.component';
import env from './env';
import { RouterContextProvider } from './_shared/hooks/useRouter';

const client = new ApolloClient({
  uri: env.GRAPHQL_ENDPOINT,
  request: (operation) => {
    operation.setContext({
      headers: {
        'x-api-key': env.GRAPHQL_API_KEY,
      },
    });
  },
});

const Root = () => (
  <ApolloProvider client={client}>
    <RouterContextProvider>
      <App />
    </RouterContextProvider>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
