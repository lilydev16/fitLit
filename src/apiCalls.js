function fetchData() {

  const allUserData = fetch('https://fitlit-api.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => data.userData)

  const allHydrationData = fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')
    .then(response => response.json())
    .then(data => data.hydrationData)

  return Promise.all([allUserData, allHydrationData])
    .then(data => {
      let allData = {};
      allData.userData = data[0];
      allData.hydrationData = data[1]
      return allData;
    })

}

export default fetchData;
