import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomeTron from './components/WelcomeTron';
import CreateProject from './components/CreateProject';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar/>
            <Route exact path="/" component={WelcomeTron} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/new" component={CreateProject} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
