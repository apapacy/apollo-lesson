import React from 'react';
import { Link } from 'react-router-dom'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import TopPosts from './TopPosts';

class AllUsers extends React.PureComponent {
  render() {
    return (
      <Query
        query={gql`
          query{
           allUsers {
             id
             name
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

          return ([
            <ul key='allUsers'>
              {data.allUsers.map(({ id, name }) => (
                <li key={id}><Link  to={`/user/${id}`}>{name ? name : 'incognoito'}</Link></li>
              ))}
            </ul>,
            <TopPosts key='topPosts' />
          ]);
        }}
      </Query>
    );
  }
}

export default AllUsers
