import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Layout from './Layout';
import AllUsers from './AllUsers';
import TopPosts from './TopPosts';
import NewPost from './NewPost';
import Post from './Post';

const AppRouter = () => (
    <Layout>
      <Switch>
        <Route exact path='/' component={ AllUsers } />
        <Route exact path='/posts' component={ TopPosts } />
        <Route exact path='/post/:postId' component={ Post } />
        <Route exact path='/user/:userId' component={ NewPost } />
      </Switch>
    </Layout>
);

export default AppRouter;
