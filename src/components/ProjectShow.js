import React from 'react';
import { connect } from 'react-redux';

const ProjectShow = ({ project }) => {
  return (
    <div className='container'>
      <h1 className='page-header'>{project.name}</h1>

      <h3>Category:</h3>
      <p>{project.category}</p>

      <h3>Notes:</h3>
      <p>{project.notes}</p>

      <h3>Start By:</h3>
      <p>{project.startBy}</p>

      <h3>Finish By:</h3>
      <p>{project.finishBy}</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const project = state.projects.find(project => project.id == ownProps.match.params.projectId)

  if (project) {
    return { project }
  } else {
    return { project: {} }
  }
}

export default connect(mapStateToProps)(ProjectShow);
