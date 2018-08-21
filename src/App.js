import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import WelcomeTron from './components/WelcomeTron';
import NavBar from './components/NavBar';
import ProjectsPage from './components/ProjectsPage';
import Categories from './components/Categories';
import CreateProject from './components/CreateProject';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <div className='container'>
              <Route exact path="/" component={WelcomeTron} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/categories" component={Categories} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
