const demoProjects = [{id: 1, name: 'Make new app', category: 'Coding', notes: 'something in node.js and react', startBy: '', finishBy: '', completed: false}, {id: 2, name: 'Reach out to HR guy', category: 'Job Search', notes: 'invite for some coffee', startBy: '', finishBy: '', completed: false}]

export default (state = {loading: false, projects: [], categories: []}, action) => {
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
      // This will be replaced with real data fetched from server
      debugger;
      return {loading: false, projects: state.projects}

    case 'FETCH_CATEGORIES':
      // This will be replaced with real data fetched from server
      const categoryNames = []

      const categories = state.projects.map(project => {
        if (!categoryNames.includes(project.name)) {
          categoryNames.push(project.category)
          return {name: project.category}
        }
      });
      return Object.assign({}, state, {categories: categories})

    default:
      return Object.assign({}, state, {projects: demoProjects})
  }
}
