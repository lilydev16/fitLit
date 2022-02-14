import './css/styles.css';
import './images/turing-logo.png';
import UserRepository from './UserRepository';
import fetchData from './apiCalls';

//Query Selectors -----------------------------------------------------------------------------

const welcomeMessage = document.getElementById('welcomeMessage');
const date = document.getElementById('date');
const userName = document.getElementById('userName');
const userAddress = document.getElementById('userAddress');
const userEmail = document.getElementById('userEmail');
const userStride = document.getElementById('userStride');
const userStepGoal = document.getElementById('userStepGoal');
const avgStepGoal = document.getElementById('avgStepGoal');
const friendList = document.getElementById('friendList');
const todayHydration = document.getElementById('todayHydration');
const weeklyHydrationStats = document.getElementById('weeklyHydrationStats');
const todaySleepHours = document.getElementById('todaySleepHours');
const todaySleepQuality = document.getElementById('todaySleepQuality');
const avgSleepHours = document.getElementById('avgSleepHours');
const avgSleepQuality = document.getElementById('avgSleepQuality');
const weeklySleepStats = document.getElementById('weeklySleepStats');

//Event Listeners -------------------------------------------------------------------------------------

window.addEventListener('load', loadPage);

//functions -------------------------------------------------------------------------------------------

function loadPage() {
  fetchData().then(allData => {
    const userRepository = new UserRepository(allData);
    loadUserProfile(userRepository);
    loadHydrationData(userRepository);
    loadSleepData(userRepository);
  });
};

function loadUserProfile(data) {
  createUser(data);
  updateWelcomeMessage(data.currentUser, data);
  updateUserProfile(data.currentUser, data);
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

//API Error Handling -------------------------------------------------------------------------------------------------

function handleApiErrors() {
  window.alert("We're sorry! The server is not available at the moment. Please try again later.");
};

//User Profile -------------------------------------------------------------------------------------------------

function createUser (data) {
  const newUser = data.createNewUser(randomizeId());
  return newUser
};

function updateWelcomeMessage(user, data) {
  welcomeMessage.innerText = `Welcome ${user.returnFirstName()}`;
  date.innerText = `${getCurrentDate(data, "hydrationData")}`;
};

function updateUserProfile(user, data) {
  userName.innerText = `${user.name}`;
  userAddress.innerText = `${user.address}`;
  userEmail.innerText = `${user.email}`;
  userStride.innerText = `${user.strideLength}`;
  userStepGoal.innerText = `${user.dailyStepGoal}`;
  avgStepGoal.innerText = `Compare your step goal to the FitLit community: ${data.calcAvgStatsForAllUsers('dailyStepGoal', 'userData')}`;
  updateFriends(data);
};

function updateFriends(data) {
  return data.createUserFriendList().forEach((friend) => {
    friendList.innerHTML += `<p class="friend">${friend}</p>`
  });
};

function randomizeId() {
  return Math.floor(Math.random() * 50);
};

function getCurrentDate(data, array) {
  const index = data[array].length - 1;
  return data[array][index].date;
};

//Hydration -------------------------------------------------------------------------------------------------

function createHydrationProfile(data) {
  const newHydrationProfile = data.currentUser.createNewHydrationData();
  return newHydrationProfile;
};

function displayTodaysHydration(data) {
  const currentDate = getCurrentDate(data, "hydrationData");
  const todayHydrationAmt = data.currentUser.userHydration.calcOuncesPerDay(currentDate);
  todayHydration.innerText = `${todayHydrationAmt} fl.oz.`;
};

function displayWeeklyHydration(data) {
  const weeklyHydrationAmt = data.currentUser.userHydration.calcOuncesPerWeek();
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
  const currentDate = getCurrentDate(data, "sleepData");
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
  const weeklySleepData = data.currentUser.userSleep.calcSleepStatsPerWeek('2020/01/16');
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

export default handleApiErrors;
