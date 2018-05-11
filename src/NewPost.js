import React from 'react';
import { Link } from 'react-router-dom'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const NewPost = (props) => (
  <Mutation
    mutation={gql`
      mutation createPost($text: String!, $title: String!, $userId: ID!){
        createPost(text: $text, title: $title, userId: $userId) {
          id
        }
      }
    `}
  >
    {(createPost, { loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      let userId, title, text

      return (
        <form  onSubmit={e => {
          e.preventDefault();
          createPost({ variables: {
            userId: userId.value ,
            title: title.value ,
            text: text.value ,
          }});
        }}>
          <input
            type='hidden'
            value={ props.match.params.userId }
            ref={ node =>  userId = node }
          />
          <input
            type='text'
            ref={ node =>  title = node }
          />
          <textarea
            ref={ node =>  text = node }
          />
          <button type='submit' />
        </form>
      );
    }}
  </Mutation>
);

export default NewPost;
