import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Layout from './Layout';
import AllUsers from './AllUsers';
import TopPosts from './TopPosts';
import NewPost from './NewPost';
import Post from './Post';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex',
});

const App = () => (
  <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={ AllUsers } />
            <Route exact path='/posts' component={ TopPosts } />
            <Route exact path='/post/:postId' component={ Post } />
            <Route exact path='/user/:userId' component={ NewPost } />
          </Switch>
        </Layout>
      </BrowserRouter>
  </ApolloProvider>
);

export default App;
