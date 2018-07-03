import React from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { removeProject } from '../actions/projects';

const ProjectShow = ({ project }) => {
  let category = null;
  let notes = null;
  let startBy = null;
  let finishBy = null;
  let panel = null;

  const handleOnClick = () => {
    removeProject(project.id);
  }

  if (project.id) {
    if (project.category.name !== null) {
      category = <div><h3>Category</h3><p>{project.category.name}</p></div>
    }

    if (project.notes !== null) {
      notes = <div><h3>Notes</h3><p>{project.notes}</p></div>
    }

    if (project.start_by !== null) {
      startBy = <div><h3>Start By</h3><p>{project.start_by}</p></div>
    }

    if (project.start_by !== null) {
      finishBy = <div><h3>Start By</h3><p>{project.finish_by}</p></div>
    }

    panel = <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h1"><b>{project.name}</b></Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                {category}
                {notes}
                {startBy}
                {finishBy}

                <button className='btn btn-danger' onClick={handleOnClick}>Delete</button>
              </Panel.Body>
            </Panel>
  }

  return (
    <div >
      <br></br>
      {panel}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const project = state.projects.projects.find(project =>
    project.id.toString() === ownProps.match.params.projectId
  )

  if (project) {
    return { project }
  } else {
    return { project: {} }
  }
}

export default connect(mapStateToProps, { removeProject })(ProjectShow);
