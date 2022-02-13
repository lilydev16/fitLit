import './css/styles.css';
import './images/turing-logo.png'
import UserRepository from './UserRepository';
import User from './User'
import fetchData from './apiCalls'

//Query Selectors -----------------------------------------------------------------------------
const welcomeMessage = document.getElementById('welcomeMessage')
const userName = document.getElementById('userName')
const userAddress = document.getElementById('userAddress')
const userEmail = document.getElementById('userEmail')
const userStride = document.getElementById('userStride')
const userStepGoal = document.getElementById('userStepGoal')
const activityStepGoal = document.getElementById('activityStepGoal')
const avgStepGoal = document.getElementById('avgStepGoal')
const userFriends = document.getElementById('friendList')

const todayHydration = document.getElementById('todayHydration')
const weeklyHydrationStats = document.getElementById('weeklyHydrationStats')

const todaySleepHours = document.getElementById('todaySleepHours')
const todaySleepQuality = document.getElementById('todaySleepQuality')
const avgSleepHours = document.getElementById('avgSleepHours')
const avgSleepQuality = document.getElementById('avgSleepQuality')
// const weeklySleepQuality = document.getElementById('weeklySleepQuality')
const weeklySleepStats = document.getElementById('weeklySleepStats')

//Event Listeners -------------------------------------------------------------------------------------

window.addEventListener('load', loadPage)

//functions -------------------------------------------------------------------------------------------

function loadPage() {
  fetchData().then(allData => {
    const userRepository = new UserRepository(allData)
    loadUserProfile(userRepository)
    loadHydrationData(userRepository)
    loadSleepData(userRepository)
  })
}

function loadUserProfile(data) {
  createUser(data)
  updateWelcomeMessage(data.currentUser)
  updateUserProfile(data.currentUser, data)
  updateActivityCard(data.currentUser, data)
}

function loadHydrationData(data) {
  createHydrationProfile(data)
  displayTodaysHydration(data)
  displayWeeklyHydration(data)
}

function loadSleepData(data) {
createSleepProfile(data)
displayTodaysSleep(data)
displayAvgSleep(data)
displayWeeklySleep(data)
}

function createUser (data) {
  const newUser = data.createNewUser(randomizeId())
  return newUser
}

function updateWelcomeMessage(user) {
  welcomeMessage.innerText = `Welcome ${user.returnFirstName()}`
}

function updateUserProfile(user, data) {
  userName.innerText = `${user.name}`
  userAddress.innerText = `${user.address}`
  userEmail.innerText = `${user.email}`
  userStride.innerText = ` Stride Length: ${user.strideLength}`
  userStepGoal.innerText = `Step Goal: ${user.dailyStepGoal}`
  userFriends.innerText = `Friends: ${data.createUserFriendList()}`
}

function randomizeId() {
  return Math.floor(Math.random() * 50);
}

//Hydration -------------------------------------------------------------------------------------------------

function createHydrationProfile(data) {
  const newHydrationProfile = data.currentUser.createNewHydrationData()
  return newHydrationProfile
}

function displayTodaysHydration(data) {
  const todayHydrationAmt = data.currentUser.userHydration.calcOuncesPerDay("2020/01/22");
  todayHydration.innerText = `Water you've consumed today: ${todayHydrationAmt} fl.oz.`
}

function displayWeeklyHydration(data) {
  const weeklyHydrationAmt = data.currentUser.userHydration.calcOuncesPerWeek()

  return weeklyHydrationAmt.forEach((entry, i) => {
    let p = document.createElement('p')
    p.innerText = `${weeklyHydrationAmt[i].date}: ${weeklyHydrationAmt[i].ounces}`
    weeklyHydrationStats.appendChild(p)
    p.classList.add('weekly-hydration');
  })
}

//Sleep -------------------------------------------------------------------------------------------------

function createSleepProfile(data) {
  const newSleepProfile = data.currentUser.createNewSleepData()
  return newSleepProfile
}

function displayTodaysSleep(data) {
  const todaySleepAmt = data.currentUser.userSleep.calcSleepStatsPerDay('2020/01/22', 'hoursSlept')
  const sleepQualityToday = data.currentUser.userSleep.calcSleepStatsPerDay('2020/01/22', 'sleepQuality')
  todaySleepHours.innerText = `Hours slept today: ${todaySleepAmt}`
  todaySleepQuality.innerText = `Today's sleep quality: ${sleepQualityToday}`
}

function displayAvgSleep(data) {
  const averageSleepHours = data.currentUser.userSleep.calcAvgSleepStats('hoursSlept')
  const averageSleepQuality = data.currentUser.userSleep.calcAvgSleepStats('sleepQuality')
  avgSleepHours.innerText = `Average Hours of Sleep: ${averageSleepHours}`
  avgSleepQuality.innerText = `Average Quality of Sleep: ${averageSleepQuality}`
}

function displayWeeklySleep(data) {
  const weeklySleepData = data.currentUser.userSleep.calcSleepStatsPerWeek('2020/01/16')

  return weeklySleepData.forEach((entry, i) => {
    let p = document.createElement('p')
    weeklySleepStats.appendChild(p)
    p.innerText = `${weeklySleepData[i].date} - Hours Slept: ${weeklySleepData[i].hours}, Sleep Quality: ${weeklySleepData[i].quality}`
    p.classList.add('weekly-sleep');
  })
}

//Activity Cards ----------------------------------------------------------------------------------------------------------

function updateActivityCard(user, data) {
  avgStepGoal.innerText = `Average Step Goal All: ${data.calcAvgStatsForAllUsers('dailyStepGoal', 'userData')}`
  // activityStepGoal.innerText = `User Step Goal ${user.dailyStepGoal}`
}
