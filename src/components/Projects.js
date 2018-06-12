import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Projects extends React.Component {
  render(){
    const projects = this.props.projects.map(project =>
      <h4><li key={project.id}><NavLink to='/'>{project.name}</NavLink></li></h4>
    )
    return (
      <div className='container'>
        <h1>My projects</h1>
        <ul>
          {projects}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    projects: state.projects
  })
}

export default connect(mapStateToProps)(Projects)
