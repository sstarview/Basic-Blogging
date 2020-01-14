import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addBlog } from './action';

function UserPage(props) {
  // const token = localStorage.getItem('token');
  // console.log(token);

  // const [loggedIn, setLoggedIn] = useState(true);

  // if (token == null) setLoggedIn(false);

  // if (loggedIn === false) {
  //   return <Redirect to="/login" />;
  // }

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [id, setId] = useState(uuid());

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'body':
        setBody(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title && body) {
      const post = {
        id,
        title,
        body,
      };

      props.addBlog(post);
      setTitle('');
      setBody('');
      setId(uuid());
    }
  }

  return (
    <div className="container">
      <aside>
        <Link to="/logout">Logout</Link>
      </aside>
      <h1 className="center">Mainpage</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={handleChange}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            name="body"
            value={body}
            onChange={handleChange}
            placeholder="write something here"
          />
        </label>
        <input type="submit" />
      </form>
      <div>
        <h4>Posts</h4>
        {props.posts.map(i => (
          <div key={i.id}>Title: {i.title}</div>
        ))}
      </div>
      >
    </div>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.postList.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addBlog: post => dispatch(addBlog(post)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage);
