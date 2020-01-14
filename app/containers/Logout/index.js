import React from 'react';
import { Link } from 'react-router-dom';

export default function Logout() {
  localStorage.removeItem('token');
  return (
    <div>
      <h3>You have been logout.</h3>
      <h3>Click here to login.</h3>
      <Link to="/login">Login</Link>
    </div>
  );
}
