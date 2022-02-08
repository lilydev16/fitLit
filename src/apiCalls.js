// Your fetch requests will live here!


console.log('I will be a fetch request!')

function fetchData() {
  fetch('https://fitlit-api.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => data.userData)
}

export default fetchData;
