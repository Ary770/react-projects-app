import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Projects from './Projects';
import ProjectShow from './ProjectShow';
import CreateProject from './CreateProject';
import * as actions from '../actions/projects';
import { bindActionCreators } from 'redux';

class ProjectsPage extends React.Component {
  componentDidMount() {
    if (this.props.projects.length === 0) {
      this.props.actions.fetchProjects();
    }
  }

  render() {
    const {match, projects} = this.props;

    return (
      <div>
        {projects.length === 0 ? null: <Projects projects={projects}/>}
        <Switch>
          <Route path={`${match.url}/new`} component={CreateProject} />
          <Route path={`${match.url}/:projectId`} component={ProjectShow}/>
          <Route exact path={match.url} render={() => (
            null
          )}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    projects: state.projects.projects
  })
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
