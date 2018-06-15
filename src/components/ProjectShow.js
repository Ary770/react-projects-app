import React from 'react';
import { connect } from 'react-redux';

const ProjectShow = ({ project }) => {
  let category = null;
  let notes = null;
  let startBy = null;
  let finishBy = null;

  if (project.category !== "") {
    category = <div><h3>Category:</h3><p>{project.category}</p></div>
  }

  if (project.notes !== "") {
    notes = <div><h3>Notes:</h3><p>{project.notes}</p></div>
  }

  if (project.startBy !== "") {
    startBy = <div><h3>Start By:</h3><p>{project.startBy}</p></div>
  }

  if (project.finishBy !== "") {
    finishBy = <div><h3>Start By:</h3><p>{project.finishBy}</p></div>
  }

  return (
    <div className='container'>
      <h1 className='page-header'>{project.name}</h1>
      {category}
      {notes}
      {startBy}
      {finishBy}
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
