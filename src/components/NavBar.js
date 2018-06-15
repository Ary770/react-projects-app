import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/projects">My Projects</NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <NavLink to="projects/new">New Project</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/categories">Categories</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar
