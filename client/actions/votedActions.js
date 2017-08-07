export const votedOption = (options, idx, id) => {

  // options[idx].votes++;

  return dispatch => {
    fetch('/updateChoices', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        id: id,
        idx: idx
      })
    })
    .then( response => response.json())
    .then((response) => {
      console.log("here");
      return (
        dispatch({
          type: "VOTED_OPTION",
          payload: response
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
  }




  //
  // return dispatch => {
  //   dispatchPromise().then(() => {
  //     return (
  //       dispatch({
  //         type: "VOTED_OPTION",
  //         payload: options
  //       })
  //     );
  //   })
  //   .then(() => {
  //     return fetch('/updateChoices', {
  //       method: 'POST',
  //       credentials: 'include',
  //       headers: {
  //         Accept: 'application/json',
  //         "Content-Type": 'application/json'
  //       },
  //       body: JSON.stringify({
  //       	options: options,
  //         id: id
  //       })
  //     });
  //   })
  //   // .then( response => response.json())
  //   // .then((response) => {
  //   //   //Saved the object in databse...
  //   // })
  //   .catch(() => {
  //     console.log("Something went wrong");
  //   });
  // }
}

const dispatchPromise = () => {
  return new Promise((resolve, reject) => {
    resolve();
  });
}
