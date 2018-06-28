import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import WelcomeTron from './components/WelcomeTron';
import NavBar from './components/NavBar';
import ProjectsPage from './components/ProjectsPage';
// import * as actions from './actions/projects';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

class App extends Component {
  // componentDidMount() {
  //   if (this.props.projects.length === 0) {
  //     this.props.actions.fetchProjects();
  //   }
  // }

  render() {
    return (
      <div className="container">
        <ProjectsPage/>
        
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return ({
//     projects: state.projects.projects
//   })
// }
//
// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

export default App
// export default connect(mapStateToProps, mapDispatchToProps)(App);
