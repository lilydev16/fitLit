import handleApiErrors from "./scripts"

function fetchData() {

  const allUserData = fetch('https://fitlit-api.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => data.userData)
    .catch(err => handleApiErrors())

  const allHydrationData = fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')
    .then(response => response.json())
    .then(data => data.hydrationData)
    .catch(err => handleApiErrors())

  const allSleepData = fetch('https://fitlit-api.herokuapp.com/api/v1/sleep')
    .then(response => response.json())
    .then(data => data.sleepData)
    .catch(err => handleApiErrors())

  return Promise.all([allUserData, allHydrationData, allSleepData])
    .then(data => {
      let allData = {};
      allData.userData = data[0];
      allData.hydrationData = data[1];
      allData.sleepData = data[2]
      return allData;
    })
}

export default fetchData;
