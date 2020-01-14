import React from 'react';
import PropTypes from 'prop-types';

function BlogForm(props) {
  const { title, body, handleChange, handleSubmit } = props;
  return (
    <div className="container">
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
    </div>
  );
}

BlogForm.prototype = {
  title: PropTypes.string,
  body: PropTypes.string,
  handleChange: PropTypes.func,
};

export default BlogForm;
