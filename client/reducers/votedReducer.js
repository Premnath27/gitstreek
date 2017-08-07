const initialState = {
  voted: false,
  stats: []
}

const votedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTED_OPTION':
      state = {
        ...state,
        voted: true,
        stats: [...action.payload]
      }
      break;
    default:
      break;
  }
  return state;
}

export default votedReducer;
