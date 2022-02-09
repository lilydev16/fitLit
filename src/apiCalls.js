// Your fetch requests will live here!
function fetchData() {
  const allUserData = fetch('https://fitlit-api.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => data.userData)

  return Promise.all([allUserData])
    .then(data => {
      let allData = {};
      allData.userData = data[0];
      return allData;
    })

}

export default fetchData;
