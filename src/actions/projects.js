export const addProject = project => {
  return {
    type: 'ADD_PROJECT',
    project: Object.assign({}, project)
  }
}

export const removeProject = projectId => {
  return {
    type: 'REMOVE_PROJECT',
    projectId
  }
}

export function fetchProjects() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PROJECTS' });
    debugger;
    return fetch('api/projects', {accept: 'application/json'})
      .then(response => response.json())
      .then(projects => dispatch({ type: 'FETCH_PROJECTS', projects }));
  };
}

export function postProjects() {
  return (dispatch) => {
    dispatch({ type: 'POSTING_PROJECTS' });
    return fetch('api/projects', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData)
      })
      .then(res => res.json())
      .then(res => console.log(res))
  };
}
