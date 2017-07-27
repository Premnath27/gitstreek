export function createHook(owner, name) {
  return dispatch => {
    fetch(`/git/createHook`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
      	owner: owner,
      	name: name
      })
    })
    .then( response => response.json())
    .then((response) => {
      console.log("RESPONSE: ", response);
      return (
        dispatch({
          type: "CREATE_HOOK",
          payload: response
        })
      );
    })
    .catch((error) => {
      console.log("FAILED TO CREATE HOOK");
      return (
        dispatch({
          type: "default",
          payload: null
        })
      );
    });
  };
};

export function getRepoStats() {
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
