import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import logo from './logo.svg';
import './App.css';
import ExchangeRates from './ExchangeRates';

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload
            <ExchangeRates />
          </p>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
