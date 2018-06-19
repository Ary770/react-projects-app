
export function fetchProjects() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PROJECTS' });
    return fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(projects => dispatch({ type: 'FETCH_PROJECTS', projects }));
  };
}
