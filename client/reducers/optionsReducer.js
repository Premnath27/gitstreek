const initialState = {
  options: [{value:'', votes: 0},{value:'', votes: 0}]
}

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE':
      state.options[action.payload.idx].value = action.payload.value;
      var count = 0;
      for(var i = 0; i < state.options.length; i++){
        if(state.options[i].value !== ""){
          count++;
        }
      }
      if(count === state.options.length && state.options.length < 20){
        console.log("Adding Option");
        state = {
          ...state,
          options: [...state.options, {value:'', votes: 0} ]
        }
      } else if(state.options[action.payload.idx].value === "" && state.options.length > 2){
        console.log("Delete Option")
        state.options.splice(action.payload.idx,1)
        state = {
          ...state,
          options: [...state.options]
        }
      } else {
        state = {
          ...state,
          options: [...state.options]
        }
      }
      break;
    default:
      break;
  }
  return state;
}

export default optionsReducer;
