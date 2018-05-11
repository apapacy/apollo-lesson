import React from 'react';
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const TopPosts = () => (
  <Query
    query={gql`
      query {
        allPosts(orderBy: updatedAt_DESC, first: 7){
          id
          title
          user {
            id
            name
          }
        }
      }
    `}
    fetchPolicy='network-only'
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <ul key='topPosts'>
          {data.allPosts.map(({ id, title, user }) => (
            <li key={id}><Link  to={`/post/${id}`}>{user ? user.name : 'incognito'}, {title ? title : '***'}</Link></li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default TopPosts;
