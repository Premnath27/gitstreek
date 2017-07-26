const initialState = {
  user: {},
  repos: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      state = {
          ...state,
          user: Object.assign({},action.payload)
      };
      break;
    case "GET_REPOS":
      state = {
        ...state,
        repos: [].concat(action.payload)
      }
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;
