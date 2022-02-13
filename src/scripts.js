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
const averageStepGoal = document.getElementById('averageStepGoal')
const userFriends = document.getElementById('friendList')

const todayHydration = document.getElementById('todayHydration')
const weeklyHydration = document.getElementById('weeklyHydration')

const todaySleep = document.getElementById('todaySleep')
const sleepHours = document.getElementById('sleepHours')
const sleepQuality = document.getElementById('sleepQuality')
const todaySleepQuality = document.getElementById('todaySleepQuality')
const weeklySleepQuality = document.getElementById('weeklySleepQuality')

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
    weeklyHydration.appendChild(p)
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
  todaySleep.innerText = `Hours slept today: ${todaySleepAmt}`
  todaySleepQuality.innerText = `Today's sleep quality: ${sleepQualityToday}`
}

function displayAvgSleep(data) {
  const avgSleepHours = data.currentUser.userSleep.calcAvgSleepStats('hoursSlept')
  const avgSleepQuality = data.currentUser.userSleep.calcAvgSleepStats('sleepQuality')
  sleepHours.innerText = `Average Hours of Sleep: ${avgSleepHours}`
  sleepQuality.innerText = `Average Quality of Sleep: ${avgSleepQuality}`

}

function displayWeeklySleep(data) {
  const weeklySleepData = data.currentUser.userSleep.calcSleepStatsPerWeek('2020/01/16')

  return weeklySleepData.forEach((entry, i) => {
    let p = document.createElement('p')
    p.innerText = `${weeklySleepData[i].date} - Hours Slept: ${weeklySleepData[i].hours}, Sleep Quality: ${weeklySleepData[i].quality}`
    weeklySleepStats.appendChild(p)
    p.classList.add('weekly-sleep');
  })
}

//Activity Cards ----------------------------------------------------------------------------------------------------------

function updateActivityCard(user, data) {
  averageStepGoal.innerText = `Average Step Goal All: ${data.calcAvgStatsForAllUsers('dailyStepGoal', 'userData')}`
  activityStepGoal.innerText = `User Step Goal ${user.dailyStepGoal}`
}

function handleApiErrors() {
  window.alert("We're sorry! The server is not available at the moment. Please try again later.")
}






export default handleApiErrors;
