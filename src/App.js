import React, { Component } from 'react';
// import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';
import WelcomeTron from './components/WelcomeTron';
import CreateProject from './components/CreateProject';

class App extends Component {
  render() {
    return (
      <div >
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">My Projects</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
          </Nav>
        </Navbar>

        <WelcomeTron/>
        <CreateProject/>
      </div>
    );
  }
}

export default App;
