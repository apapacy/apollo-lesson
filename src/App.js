import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import logo from './logo.svg';
import './App.css';
import AllUsers from './AllUsers';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={AllUsers} />
            </Switch>
          </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
