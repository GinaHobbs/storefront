let initialState = {
  categories: [
    {normalizedName: 'Category 1', displayName: 'Category 1', description: 'This is a description of Category 1'},
    {normalizedName: 'Category 2', displayName: 'Category 2', description: 'This is a description of Category 2'}
  ]
}

// a reducer is a pure function that is meant to eval an action type
export default (state = initialState, action) => {
let { type, payload } = action;

switch(type) {
  case 'DISPLAY':
    let categories = state.categories.map(category => {
      if (category.normalizedName === payload) {
        return { normalizedName: category.normalizedName, displayName: category.displayName, description: category.description }
      }
      return category;
    })

    return { categories };
}
}

// an action creator is a function that RETURNS an ACTION
export const display = (normalizedName) => {
// action is an object literal with a type and a payload (optional)
return {
  type: 'DISPLAY',
  payload: normalizedName
}
}