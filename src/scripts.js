// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
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
const day1Hydration = document.getElementById('day1Hydration')
const day2Hydration = document.getElementById('day2Hydration')
const day3Hydration = document.getElementById('day3Hydration')
const day4Hydration = document.getElementById('day4Hydration')
const day5Hydration = document.getElementById('day5Hydration')
const day6Hydration = document.getElementById('day6Hydration')
const day7Hydration = document.getElementById('day7Hydration')

//Event Listeners -----------------------------------------------------------------------------

window.addEventListener('load', loadPage)

//functions --------------------------------------------------------------------------------------

function loadPage() {
  fetchData().then(allData => {
    const userRepository = new UserRepository(allData)
    loadUserProfile(userRepository)
    loadHydrationData(userRepository)
    loadSleepData(userRepository)
    console.log(userRepository.currentUser.userSleep)
  })
}

function loadUserProfile(data) {
  createUser(data)
  updateWelcomeMessage(data.currentUser)
  updateUserProfile(data.currentUser, data)
  updateActivityCard(data.currentUser, data)
}

function createHydrationProfile(data) {
  const newHydrationProfile = data.currentUser.createNewHydrationData()
  return newHydrationProfile
}

function displayTodaysHydration(data) {
  const todayHydrationAmt = data.currentUser.userHydration.calcOuncesPerDay("2020/01/22");
  todayHydration.innerText = `Water you've consumed today: ${todayHydrationAmt} fl.oz.`
}

function loadHydrationData(data) {
  createHydrationProfile(data)
  displayTodaysHydration(data)
  displayWeeklyHydration(data)
}

function loadSleepData(data) {
createSleepProfile(data)
}

function createSleepProfile(data) {
  const newSleepProfile = data.currentUser.createNewSleepData()
  return newSleepProfile
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

function updateActivityCard(user, data) {
  averageStepGoal.innerText = `Average Step Goal All: ${data.calculateAverageStepGoal()}`
  activityStepGoal.innerText = `User Step Goal ${user.dailyStepGoal}`
}

function displayWeeklyHydration(data) {
  const weeklyHydrationAmt = data.currentUser.userHydration.calcOuncesPerWeek()
  day1Hydration.innerText = weeklyHydrationAmt[0]
  day2Hydration.innerText = weeklyHydrationAmt[1]
  day3Hydration.innerText = weeklyHydrationAmt[2]
  day4Hydration.innerText = weeklyHydrationAmt[3]
  day5Hydration.innerText = weeklyHydrationAmt[4]
  day6Hydration.innerText = weeklyHydrationAmt[5]
  day7Hydration.innerText = weeklyHydrationAmt[6]
}
