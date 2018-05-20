import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Layout from './Layout';
import AllUsers from './AllUsers';
import TopPosts from './TopPosts';
import NewPost from './NewPost';
import Post from './Post';
import AppRouter from './AppRouter';

const App = (props) => (
  <ApolloProvider client={props.client}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  </ApolloProvider>
);

export default App;
