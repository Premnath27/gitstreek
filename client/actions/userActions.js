export function getUser() {
  return dispatch => {
    fetch('/getUser', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
      }
    })
    .then( response => response.json())
    .then((response) => {
      return (
        dispatch({
          type: "GET_USER",
          payload: response
        })
      );
    })
    .catch((error) => {
      console.log("Please login!");
      return (
        dispatch({
          type: "GET_USER",
          payload: null
        })
      );
    });
  };
};

export function getRepos() {
  return dispatch => {
    fetch('/git/getRepos', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
      }
    })
    .then( response => response.json())
    .then((response) => {
      return (
        dispatch({
          type: "GET_REPOS",
          payload: response
        })
      );
    })
    .catch((error) => {
      console.log("Please login!");
      return (
        dispatch({
          type: "GET_REPOS",
          payload: null
        })
      );
    });
  };
};
