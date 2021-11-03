import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navBar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="title">
        <h1>Math Magicians</h1>
      </div>
      <div className="link">
        <ul>
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/calc" exact>Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/quote" exact>Quote</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
