import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from './action';

export const randomTokenGenerator = () => {
  const upper = 1000000;
  const lower = 100000;
  const number = Math.floor(Math.random() * (upper - lower + 1)) + lower;

  return number;
};

function Signup(props) {
  const [username, setUsername] = useState('');

  const handleUsername = e => {
    setUsername(e.target.value);
  };

  const [password, setpassword] = useState('');

  const handlePassword = e => {
    setpassword(e.target.value);
  };

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (
      username &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      const user = {
        name: username,
        password,
      };
      const newUsers = [...props.users, user];

      props.addUser(user);
      setLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(newUsers));
      const token = randomTokenGenerator().toString();
      localStorage.setItem('token', JSON.stringify(token));
    }
  };

  if (loggedIn) {
    return <Redirect to="/userpage" />;
  }

  return (
    <div className="container">
      <h2 className="center">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="text"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
        </label>
        <input type="submit" />
      </form>
      <br />
      <div>
        <h5>Already a member?</h5>
        <button type="button">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    users: state.userList.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: user => dispatch(addUser(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
