export function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATEGORIES' });
    return fetch('api/categories', {accept: 'application/json',})
      .then(response => response.json())
      .then(categories => dispatch({ type: 'FETCH_CATEGORIES', payload: categories }));
  };
}
