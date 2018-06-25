import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="page-header">
      <ul className="nav nav-pills">
        <li role="presentation" className="active"><NavLink to="/projects">My Projects</NavLink></li>
        <li role="presentation"><NavLink to="/projects/new">New Project</NavLink></li>
        <li role="presentation"><NavLink to="/categories">Categories</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar
