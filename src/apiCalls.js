import handleApiErrors from "./scripts";

function fetchData(url, endData) {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${url}`)
    .then(response => response.json())
    .catch(err => handleApiErrors())
};

export default fetchData;
