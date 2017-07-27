const initialState = {
  user: {},
  repos: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      state = {
          ...state,
          user: Object.assign({},action.payload),
          repos: [].concat(action.payload.repos)
      };
      break;
    case "GET_REPOS":
      state = {
        ...state,
        repos: [].concat(action.payload)
      }
      break;
    case "CREATE_HOOK":
      console.log("CREATE HOOK REDUCER");
      state = {
        ...state,
        // repos: [].concat(action.payload)
      }
    default:
      break;
  }
  return state;
};

export default userReducer;
