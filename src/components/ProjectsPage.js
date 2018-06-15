import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Projects from './Projects';
import ProjectShow from './ProjectShow';
import CreateProject from './CreateProject';

const ProjectsPage = ({match, projects}) =>
  <div>
    <Projects projects={projects}/>
    <Switch>
      <Route path={`${match.url}/new`} component={CreateProject} />
      <Route path={`${match.url}/:projectId`} component={ProjectShow}/>
      <Route exact path={match.url} render={() => (
        null
      )}/>
    </Switch>
  </div>

const mapStateToProps = state => {
  return ({
    projects: state.projects
  })
}

export default connect(mapStateToProps)(ProjectsPage);
