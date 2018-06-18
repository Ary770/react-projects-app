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
