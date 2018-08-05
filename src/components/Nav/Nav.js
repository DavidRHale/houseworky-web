import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo left">
        Houseworky
      </a>
      <ul className="right">
        <li>
          <Link to="/signup" id="signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
