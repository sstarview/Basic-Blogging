import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Modistabox
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
