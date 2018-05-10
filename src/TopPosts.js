import React from 'react';
import { Link } from 'react-router-dom'
import { Query } from "react-apollo";
import gql from "graphql-tag";

class TopPosts extends React.PureComponent {
  render() {
    return (
      <Query
        query={gql`
          query {
    allPosts(first:7) {
      id
      title
    }
  }
        `}
      >
        {({ loading, error, data }) => {
          for (let key in arguments[0])
          console.log(key, arguments[0][key]);
          console.log('data', data)
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <ul key='topPosts'>
              {data.allPosts.map(({ id, title }) => (
                <li key={id}><Link  to={`/post/${id}`}>{title ? title : '***'}</Link></li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default TopPosts
