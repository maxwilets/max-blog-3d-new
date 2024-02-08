import React from 'react';
import ReactDOM from 'react-dom/client';
import { createUploadLink } from 'apollo-upload-client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client';
import { cors } from './config';
import App from './App.jsx';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/',
  defaultOptions: {
    query: { errorPolicy: 'all' },
    mutate: { errorPolicy: 'ignore' },
  },
  fetchOptions: { mode: 'no-cors' },
  // link: ApolloLink.from([
  //   // this uses apollo-link-http under the hood, so all the options here come from that package

  //   createUploadLink({
  //     uri: 'http://localhost:3000/',
  //     cors,
  //     fetchOptions: {
  //       credentials: 'include',
  //     },
  //   }),
  // ]),

  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
);
