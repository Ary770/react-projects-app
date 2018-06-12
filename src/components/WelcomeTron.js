import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const WelcomeTron = () =>
  <div className='container'>
    <Jumbotron>
      <h1>My Projects App!</h1>
      <p>
        Everyone has projects in life...some more important than others...why not have them all on an app that will help you organize and keep track of them! Yes! Let’s do it...
      </p>
      <p>
        <NavLink to='/new' bsStyle="primary">Create New Project</NavLink>
      </p>
    </Jumbotron>
  </div>

  export default WelcomeTron;
