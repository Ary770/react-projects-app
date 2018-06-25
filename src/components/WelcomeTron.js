import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const WelcomeTron = () =>
  <div>
    <Jumbotron>
      <h1>My Projects App!</h1>
      <p>
        Everyone has projects in life...why not have them all on an app that will help you organize and keep track of them!
      </p>
      <p>
        <NavLink to='/projects/new' bsStyle="primary">Create New Project</NavLink>
      </p>
    </Jumbotron>
  </div>

  export default WelcomeTron;
