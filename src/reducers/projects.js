export default (state = {loading: false, projects: []}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return state.projects.concat(action.project);
    case 'REMOVE_PROJECT':
      return state.projects.filter(project => project.id !== action.projectId);
    case 'LOADING_PROJECTS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_PROJECTS':
      return {loading: false, projects: action.projects}
    default:
      return state;
  }
}
