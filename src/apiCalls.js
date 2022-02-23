import handleApiErrors from "./scripts";

function fetchData(url) {
  return fetch(`http://localhost:3001/api/v1/${url}`)
    .then(response => response.json())
    .catch(err => handleApiErrors())
};

export default fetchData;
