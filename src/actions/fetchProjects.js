
export function fetchProjects() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PROJECTS' });
    return fetch('api/projects', {accept: 'application/json'})
      .then(response => response.json())
      .then(projects => dispatch({ type: 'FETCH_PROJECTS', projects }));
  };
}
