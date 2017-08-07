import { history } from "../store";

export const questionChange = (question) => {
  return {
    type: 'QUESTION_CHANGE',
    payload: {question: question}
  }
}

export const createQuestion = (question, options) => {
  return dispatch => {
    fetch('/createQuestion', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
      	question: question,
      	options: options
      })
    })
    .then( response => response.json())
    .then((response) => {
      return (
        dispatch({
          type: "CREATE_QUESTION",
          payload: {id:response}
        })
      );
    })
    .then((response) => {
      return history.push('/success/'+response.payload.id);
    })
    .catch((error) => {
      console.log("You fudged up");
      return (
        dispatch({
          type: "FAILED_CREATE_QUESTION",
          payload: null
        })
      );
    });
  }
}

export const getQuestion = (id) => {
  return dispatch => {
    fetch('/getQuestion?id='+id, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      qs: JSON.stringify({
      	id: id
      })
    })
    .then( response => response.json())
    .then((response) => {
      return (
        dispatch({
          type: "GET_QUESTION",
          payload: response
        })
      );
    })
    .catch((error) => {
      console.log("YOU DIDNT GET QUESTION");
      return (
        dispatch({
          type: "FAILED_GET_QUESTION",
          payload: null
        })
      );
    });
  }
}
