const initialState = {
  question: "",
  id: "",
  answerChoices: []
}

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'QUESTION_CHANGE':
      state = {
        ...state,
        question: action.payload.question
      }
      break;
    case 'CREATE_QUESTION':
      state = {
        ...state,
        question: "",
        id: action.payload.id
      }
      break;
    case 'GET_QUESTION':
      state = {
        ...state,
        question: action.payload.question,
        id: action.payload._id,
        answerChoices: [...action.payload.options]
      }
      break;
    default:
      break;
  }
  return state;
}

export default questionReducer;
