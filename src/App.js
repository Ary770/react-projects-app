import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import WelcomeTron from './components/WelcomeTron';
import NavBar from './components/NavBar';
import ProjectsPage from './components/ProjectsPage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={WelcomeTron} />
            <Route path="/projects" component={ProjectsPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
