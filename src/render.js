import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { matchPath, StaticRouter, Switch, Route, } from 'react-router-dom';
import fetch from 'node-fetch';
import { ApolloProvider, getDataFromTree, renderToStringWithData  } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";

import Layout from './Layout';
import AllUsers from './AllUsers';
import TopPosts from './TopPosts';
import NewPost from './NewPost';
import Post from './Post';
import assets from '../build/asset-manifest.json';




module.exports = async (req, res, next) => {
  const client = new ApolloClient({
   ssrMode: true,
   // Remember that this is the interface the SSR server will use to connect to the
   // API server, so we need to ensure it isn't firewalled, etc
   link: createHttpLink({
     uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex',
     // credentials: 'same-origin',
     headers: {
       cookie: req.header('Cookie'),
     },
     fetch,
   }),
   cache: new InMemoryCache(),
 });

    const context = {};
    const App =  <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <Layout>
          <Switch>
            <Route exact path='/' component={ AllUsers } />
            <Route exact path='/posts' component={ TopPosts } />
            <Route exact path='/post/:postId' component={ Post } />
            <Route exact path='/user/:userId' component={ NewPost } />
          </Switch>
        </Layout>
      </StaticRouter>
    </ApolloProvider>;

    await getDataFromTree(App)
      const html = ReactDOMServer.renderToString((App));
      const initialState = client.extract();

      res.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Conduit</title>
            <!-- Import the custom Bootstrap 4 theme from our hosted CDN -->
            <link rel="stylesheet" href="/${assets['main.css']}">
          </head>
          <body>
            <script>
              // WARNING: See the following for security issues around embedding JSON in HTML:
              // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
              window.__PRELOADED_STATE__ = ${JSON.stringify(initialState, null, 2).replace(/</g, '\\u003c')};
            </script>
            <section id="app">${html}</section>
            <script src="/${assets['main.js']}"></script>
          </body>
        </html>
      `);
      res.end();
}
