import './css/styles.css';
import './images/turing-logo.png';
import UserRepository from './UserRepository';
import fetchCalls from './apiCalls';


//Query Selectors -----------------------------------------------------------------------------

const welcomeMessage = document.getElementById('welcomeMessage');
const date = document.getElementById('date');
const userName = document.getElementById('userName');
const userAddress = document.getElementById('userAddress');
const userEmail = document.getElementById('userEmail');
const userStride = document.getElementById('userStride');
const userStepGoal = document.getElementById('userStepGoal');
const compareStepGoalChart = document.getElementById('compareStepGoalChart').getContext('2d');
const compareStepsChart = document.getElementById('compareStepsChart').getContext('2d');
const compareActiveMinChart = document.getElementById('compareActiveMinChart').getContext('2d');
const compareStairsChart = document.getElementById('compareStairsChart').getContext('2d');
const friendList = document.getElementById('friendList');
const todayHydration = document.getElementById('todayHydration');
const weeklyHydrationStats = document.getElementById('weeklyHydrationStats');
const todaySleepHours = document.getElementById('todaySleepHours');
const todaySleepQuality = document.getElementById('todaySleepQuality');
const avgSleepHours = document.getElementById('avgSleepHours');
const avgSleepQuality = document.getElementById('avgSleepQuality');
const weeklySleepStats = document.getElementById('weeklySleepStats');
const todayActivitySteps = document.getElementById('todayActivitySteps');
const todayActivityMinutes = document.getElementById('todayActivityMinutes');
const todayActivityMiles = document.getElementById('todayActivityMiles');
const weeklyActivityStats = document.getElementById('weeklyActivityStats')

const activityForm = document.getElementById('activityForm');
const hydrationForm = document.getElementById('hydrationForm');
const sleepForm = document.getElementById('sleepForm');
const activityUserID = document.getElementById('activityUserID');
const hydrationUserID = document.getElementById('hydrationUserID');
const sleepUserID = document.getElementById('sleepUserID');

const returnToMainButton = document.getElementById('returnToMain')
const inputDataButton = document.getElementById('inputDataButton')
const formSection = document.getElementById('formSection')
const mainSection = document.getElementById('mainSection')

const activivtyDate = document.getElementById('activityDate');
const activityNumSteps = document.getElementById('numSteps');
const activityMinActive = document.getElementById('minutesActive');
const activityStairs = document.getElementById('flightsOfStairs');
const hydrationDate = document.getElementById('hydrationDate');
const hydrationOunces = document.getElementById('numOunces');
const sleepDate = document.getElementById('sleepDate');
const sleepHours = document.getElementById('hoursSlept');
const sleepQuality = document.getElementById('sleepQuality');

//Event Listeners -------------------------------------------------------------------------------------

window.addEventListener('load', loadRandomUser);
activityForm.addEventListener('submit', packageNewActivityData)
hydrationForm.addEventListener('submit', packageNewHydrationData)
sleepForm.addEventListener('submit', packageNewSleepData)
returnToMainButton.addEventListener('click', returnToMain)
inputDataButton.addEventListener('click', goToForms)

//functions -------------------------------------------------------------------------------------------
function loadRandomUser() {
  loadPage(randomizeId());
}

function loadCurrentUser() {
  loadPage(parseInt(activityUserID.innerText));
}

function returnToMain() {
  formSection.classList.add('hidden')
  mainSection.classList.remove('hidden')
  loadCurrentUser();
}

function goToForms() {
  mainSection.classList.add('hidden')
  formSection.classList.remove('hidden')
}

function loadPage(id) {
  returnPromise().then(allData => {
    const userRepository = new UserRepository(allData);
    loadUserProfile(userRepository, id);
    loadHydrationData(userRepository);
    loadSleepData(userRepository);
    loadActivityData(userRepository)
  });
};

function loadUserProfile(data, id) {
  createUser(data, id);
  updateWelcomeMessage(data.currentUser, data);
  updateUserProfile(data.currentUser, data);
  updateFormUserID(data)
};

function loadHydrationData(data) {
  createHydrationProfile(data);
  displayTodaysHydration(data);
  displayWeeklyHydration(data);
};

function loadSleepData(data) {
  createSleepProfile(data);
  displayTodaysSleep(data);
  displayAvgSleep(data);
  displayWeeklySleep(data);
};

function loadActivityData(data) {
  createActivityProfile(data)
  displayTodaysActivity(data, data.currentUser)
  displayWeeklyActivity(data)
  // createActivityCharts(data)
};

function createActivityCharts(data) {
  createCompareDailyStepsChart(compareStepsChart, data)
  createCompareActiveMinChart(compareActiveMinChart, data)
  createCompareStairsChart(compareStairsChart, data)
}

//API Handling -------------------------------------------------------------------------------------------------

function returnPromise () {
  const allUserData = fetchCalls.fetchData('users')
  const allHydrationData = fetchCalls.fetchData('hydration')
  const allSleepData = fetchCalls.fetchData('sleep')
  const allActivityData = fetchCalls.fetchData('activity')
  return Promise.all([allUserData, allHydrationData, allSleepData, allActivityData])
    .then(data => {
    let allData = {}
    allData.userData = data[0].userData;
    allData.hydrationData = data[1].hydrationData;
    allData.sleepData = data[2].sleepData;
    allData.activityData = data[3].activityData
    return allData;
  });
}

function handleApiErrors(error) {
  if (error.message === 'Failed to fetch'){
    window.alert("Ooops! Something went wrong. Please retry.");
  }
};

function packageNewActivityData(e) {
  e.preventDefault()
  const newActivityData = {
    userID: parseInt(activityUserID.innerText),
    date: activityDate.value.split('-').join('/'),
    numSteps: parseInt(activityNumSteps.value),
    minutesActive: parseInt(activityMinActive.value),
    flightsOfStairs: parseInt(activityStairs.value),
  }

  fetchCalls.postData('http://localhost:3001/api/v1/activity', newActivityData)
  activityForm.reset()
}

function packageNewHydrationData(e) {
  e.preventDefault()
  const newHydrationData = {
    userID: parseInt(hydrationUserID.innerText),
    date: hydrationDate.value.split('-').join('/'),
    numOunces: parseInt(hydrationOunces.value),
  }

  fetchCalls.postData('http://localhost:3001/api/v1/hydration', newHydrationData)
  hydrationForm.reset()
};

function packageNewSleepData(e) {
  e.preventDefault()
  const newSleepData = {
    userID: parseInt(sleepUserID.innerText),
    date: sleepDate.value.split('-').join('/'),
    hoursSlept: parseInt(sleepHours.value),
    sleepQuality: parseInt(sleepQuality.value),
  }

  fetchCalls.postData('http://localhost:3001/api/v1/sleep', newSleepData)
  sleepForm.reset()
};
//User Profile -------------------------------------------------------------------------------------------------

function createUser(data, id) {
  const newUser = data.createNewUser(id);
  return newUser
};

function updateWelcomeMessage(user, data) {
  welcomeMessage.innerText = `Welcome ${user.returnFirstName()}`;
  date.innerText = new Date().toLocaleDateString();
};

function updateUserProfile(user, data) {
  userName.innerText = `${user.name}`;
  userAddress.innerText = `${user.address}`;
  userEmail.innerText = `${user.email}`;
  userStride.innerText = `${user.strideLength}`;
  userStepGoal.innerText = `${user.dailyStepGoal}`;
  // createStepGoalChart(compareStepGoalChart, user, data);
  updateFriends(data);
};

function createStepGoalChart(chartElement, user, data) {
  let stepAverage = data.calcAvgStatsForAllUsers('dailyStepGoal', 'userData');
  new Chart(chartElement, {
    type: 'bar',
    data: {
      labels: ['My Step Goal', 'Avg. Step Goal of all users'],
      datasets: [{
        label: 'Step Goal',
        data: [
          user.dailyStepGoal,
          stepAverage
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ],
        hoverBorderWidth: 2,
        hoverBorderColor: '#777'
      }]
    }
  });
};

function updateFriends(data) {
  return data.createUserFriendList().forEach((friend) => {
    friendList.innerHTML += `<p class="friend">${friend}</p>`
  });
};

function randomizeId() {
  return Math.floor(Math.random() * 50);
};

function getCurrentUserDate(data, dataType, array) {
  const index = data.currentUser[dataType][array].length - 1;
  return data.currentUser[dataType][array][index].date
}

function updateFormUserID(data) {
  activityUserID.innerText = data.currentUser.id;
  hydrationUserID.innerText = data.currentUser.id;
  sleepUserID.innerText = data.currentUser.id;
}
//Hydration -------------------------------------------------------------------------------------------------

function createHydrationProfile(data) {
  const newHydrationProfile = data.currentUser.createNewHydrationData();
  return newHydrationProfile;
};

function displayTodaysHydration(data) {
  const currentDate = getCurrentUserDate(data, "userHydration", "hydrationData");
  const todayHydrationAmt = data.currentUser.userHydration.calcOuncesPerDay(currentDate);
  todayHydration.innerText = `${todayHydrationAmt}`;
};

function displayWeeklyHydration(data) {
  const currentDate = getCurrentUserDate(data, "userHydration", "hydrationData");
  const weeklyHydrationAmt = data.currentUser.userHydration.calcOuncesPerWeek(currentDate);
  weeklyHydrationAmt.forEach((entry, i) => {
    weeklyHydrationStats.innerHTML += `
    <table class="hydration-table">
      <tr>
        <th>Date</th>
        <th>Fluid Ounces</th>
      </tr>
      <tr>
        <td>${weeklyHydrationAmt[i].date}</td>
        <td>${weeklyHydrationAmt[i].ounces}</td>
      </tr>`;
  });
};

//Sleep -------------------------------------------------------------------------------------------------

function createSleepProfile(data) {
  const newSleepProfile = data.currentUser.createNewSleepData();
  return newSleepProfile;
};

function displayTodaysSleep(data) {
  const currentDate = getCurrentUserDate(data, "userSleep", "sleepData");
  const todaySleepAmt = data.currentUser.userSleep.calcSleepStatsPerDay(currentDate, 'hoursSlept');
  const sleepQualityToday = data.currentUser.userSleep.calcSleepStatsPerDay(currentDate, 'sleepQuality');
  todaySleepHours.innerText = `${todaySleepAmt}`;
  todaySleepQuality.innerText = `${sleepQualityToday}`;
};

function displayAvgSleep(data) {
  const averageSleepHours = data.currentUser.userSleep.calcAvgSleepStats('hoursSlept');
  const averageSleepQuality = data.currentUser.userSleep.calcAvgSleepStats('sleepQuality');
  avgSleepHours.innerText = `${averageSleepHours}`;
  avgSleepQuality.innerText = `${averageSleepQuality}`;
};

function displayWeeklySleep(data) {
  const currentDate = getCurrentUserDate(data, "userSleep", "sleepData");
  const weeklySleepData = data.currentUser.userSleep.calcSleepStatsPerWeek(currentDate);
  weeklySleepData.forEach((entry, i) => {
    weeklySleepStats.innerHTML += `
    <table class="sleep-table">
      <tr>
        <th>Date</th>
        <th>Hours</th>
        <th>Quality</th
      </tr>
      <tr>
        <td>${weeklySleepData[i].date}</td>
        <td>${weeklySleepData[i].hours}</td>
        <td>${weeklySleepData[i].quality}</td>
      </tr>`;
  });
};

//Activity -------------------------------------------------------------------------------------------------

function createActivityProfile(data) {
  const newActivityProfile = data.currentUser.createNewActivityData();
  return newActivityProfile;
};

function displayTodaysActivity(data, user) {
  const currentDate = getCurrentUserDate(data, "userActivity", "activityData");
  const todaySteps = data.currentUser.userActivity.calcActivityDailyStats(currentDate, "numSteps")
  const todayMinActive = data.currentUser.userActivity.calcActivityDailyStats(currentDate, "minutesActive")
  const todayMiles = data.currentUser.userActivity.calculateMilesPerDay(currentDate, user);
  todayActivitySteps.innerText = todaySteps;
  todayActivityMinutes.innerText = todayMinActive;
  todayActivityMiles.innerText = todayMiles;
};

function displayWeeklyActivity(data) {
  const currentDate = getCurrentUserDate(data, "userActivity", "activityData");
  const weeklyActivityData = data.currentUser.userActivity.calcActivityStatsPerWeek(currentDate);
  weeklyActivityData.forEach((entry, i) => {
    weeklyActivityStats.innerHTML += `
    <table class="activity-table">
      <tr>
        <th>Date</th>
        <th>Steps</th>
        <th>Min Active</th>
        <th>Stairs</th>
      </tr>
      <tr>
        <td>${weeklyActivityData[i].date}</td>
        <td>${weeklyActivityData[i].steps}</td>
        <td>${weeklyActivityData[i].minActive}</td>
        <td>${weeklyActivityData[i].stairs}</td>
      </tr>`;
  });
};


function createCompareDailyStepsChart(chartElement, data) {
  const currentDate = getCurrentUserDate(data, "userActivity", "activityData");
  const todaySteps = data.currentUser.userActivity.calcActivityDailyStats(currentDate, "numSteps")
  const avgUserSteps = data.calcAvgStatsForAllUsers('numSteps', 'activityData');

  new Chart(chartElement, {
    type: 'bar',
    data: {
      labels: ['My Steps', 'Avg. Steps'],
      datasets: [{
        label: 'Today\'s Steps',
        data: [
          todaySteps,
          avgUserSteps
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ],
        hoverBorderWidth: 2,
        hoverBorderColor: '#777'
      }]
    }
  });
};


function createCompareActiveMinChart(chartElement, data) {
  const currentDate = getCurrentUserDate(data, "userActivity", "activityData");
  const todayMinActive = data.currentUser.userActivity.calcActivityDailyStats(currentDate, "minutesActive")
  const avgUserActiveMin = data.calcAvgStatsForAllUsers('minutesActive', 'activityData');

new Chart(chartElement, {
    type: 'bar',
    data: {
      labels: ['My Active Minutes', 'Avg. Active Min'],
      datasets: [{
        label: 'Today\'s Active Minutes',
        data: [
          todayMinActive,
          avgUserActiveMin
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ],
        hoverBorderWidth: 2,
        hoverBorderColor: '#777'
      }]
    }
  });
}


function createCompareStairsChart(chartElement, data) {
  const currentDate = getCurrentUserDate(data, "userActivity", "activityData");
  const todayStairs = data.currentUser.userActivity.calcActivityDailyStats(currentDate, "flightsOfStairs")
  const avgUserStairs = data.calcAvgStatsForAllUsers('flightsOfStairs', 'activityData');

new Chart(chartElement, {
    type: 'bar',
    data: {
      labels: ['Flights Climbed', 'Avg. Flights Climbed'],
      datasets: [{
        label: 'Today\'s Stairs Climbed',
        data: [
          todayStairs,
          avgUserStairs
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ],
        hoverBorderWidth: 2,
        hoverBorderColor: '#777'
      }]
    }
  });
}










export default handleApiErrors;
