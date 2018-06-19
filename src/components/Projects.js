import React from 'react';
import { Link } from 'react-router-dom';

const Projects = (props) => {
  const projects = props.projects.map(project =>
    <h4 key={project.id}><li><Link to={`/projects/${project.id}`}>{project.name}</Link></li></h4>
  )

  return (
    <div className='container'>
      {projects.length === 0 ? null : <h1>My projects</h1>}
      <ul>
        {projects}
      </ul>
    </div>
  )
}

export default Projects;
