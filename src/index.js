import React from 'react';
import { hydrate } from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: ApolloLink.from([
     onError(({ graphQLErrors, networkError }) => {
       if (graphQLErrors)
         graphQLErrors.map(({ message, locations, path }) =>
           console.log(
             `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
           ),
         );
       if (networkError) console.log(`[Network error]: ${networkError}`);
     }),
     new HttpLink({
       uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex',
       // credentials: 'same-origin'
     })
  ]),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

hydrate(<App client={client} />, document.getElementById('app'));
