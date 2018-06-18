export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return state.concat(action.project);
    case 'REMOVE_PROJECT':
      return state.filter(project => project.id !==action.projectId);
    default:
      return state;
  }
}
