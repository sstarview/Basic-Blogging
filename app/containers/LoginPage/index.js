import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { randomTokenGenerator } from 'containers/Signup';

export default function LoginPage() {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'Username':
        setUsername(value);
        break;
      case 'Password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const [loggedIn, setLoggedIn] = useState(false);
  function handleSubmit() {
    const users = localStorage.getItem('user');
    const parseUsers = JSON.parse(users);
    const user = parseUsers.find(
      p => p.name === username && p.password === password,
    );
    if (username && password && user) {
      setLoggedIn(true);
      const token = randomTokenGenerator().toString();
      localStorage.setItem('token', JSON.stringify(token));
    }
  }

  if (loggedIn) {
    return <Redirect to="/userpage" />;
  }

  return (
    <div className="container">
      <h2 className="center">Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{' '}
          <input
            type="text"
            name="Username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
          />
        </label>
        <label>
          Password:{' '}
          <input
            type="text"
            name="Password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      <br />
      <div>
        <h5>New User!</h5>
        <button type="button">
          <Link to="/signup">Sign up</Link>
        </button>
      </div>
    </div>
  );
}
