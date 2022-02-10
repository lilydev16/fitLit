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
//Event Listeners -----------------------------------------------------------------------------

window.addEventListener('load', loadUserProfle)

//global variable -----------------------------------------------------------------------------

//functions --------------------------------------------------------------------------------------

function loadUserProfle() {
  fetchData().then(allData => {
    const userRepository = new UserRepository(allData)
    createUser(userRepository)
    updateWelcomeMessage(userRepository.currentUser)
    updateUserProfile(userRepository.currentUser, userRepository)
    updateActivityCard(userRepository.currentUser, userRepository)
    userRepository.currentUser.createNewHydrationData()
    userRepository.currentUser.userHydration.calcOuncesPerWeek()
  })
}

function loadUserProfile() {

}

function loadHydrationData() {

}

function loadSleepData() {

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

function createUser (data) {
  const newUser = data.createNewUser(randomizeId())
  return newUser
}

function updateActivityCard(user, userRepository) {
  averageStepGoal.innerText = `Average Step Goal All: ${userRepository.calculateAverageStepGoal()}`
  activityStepGoal.innerText = `User Step Goal ${user.dailyStepGoal}`
}
