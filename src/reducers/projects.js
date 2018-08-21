const demoProjects = [{id: 1, name: 'Make new app', category: 'coding', notes: 'something in node.js and react', startBy: '', finishBy: '', completed: false}, {id: 2, name: 'Reach out to ____', category: 'job search', notes: 'invite for some coffee', startBy: '', finishBy: '', completed: false}]

export default (state = {loading: false, projects: []}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      const projects = state.projects
      projects.push(action.project)
      return Object.assign({}, state, {projects: projects})

    case 'REMOVE_PROJECT':
      const projectToDelete = state.projects.filter(project => project.id === action.projectId);

      break;
    case 'LOADING_PROJECTS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_PROJECTS':
      debugger;
      return {loading: false, projects: state.projects}

    default:
      return Object.assign({}, state, {projects: demoProjects})
  }
}
