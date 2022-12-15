import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all-meetups">All Meetups</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/new-meetups">New Meetups</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;