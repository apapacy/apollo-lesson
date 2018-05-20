import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate } from 'react-dom';

import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex',
  cache,
  //defaultOptions: {
  //  query: {
  //    fetchPolicy: "cache-first",
  //  },
  //},
  // initialState: window.__APOLLO_STATE__,
  // ssrForceFetchDelay: 1000000000,
  // ssrCacheFirstFetchPolicyDuration: 1000000000,
});
console.log(cache)



hydrate(<App client={client} />, document.getElementById('app'));
// registerServiceWorker();
