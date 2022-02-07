// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './UserRepository';

import User from './User'

//Query Selectors -----------------------------------------------------------------------------
const welcomeMessage = document.querySelector('.welcome-message')
const userName = document.querySelector('.user-name')
const userAddress = document.querySelector('.user-address')
const userEmail = document.querySelector('.user-email')
const userStride = document.querySelector('.user-stride')
const userStepGoal = document.querySelector('#stepGoalUser')
const stepGoalAll = document.querySelector('#stepGoalAll')
//Event Listeners -----------------------------------------------------------------------------

window.addEventListener('load', loadUserProfle)

//global variable -----------------------------------------------------------------------------

const userRepository = new UserRepository(userData)

//functions --------------------------------------------------------------------------------------
function updateWelcomeMessage(user) {
    welcomeMessage.innerText = `Welcome ${user.returnFirstName()}`
}

function updateUserProfile(user) {
  userName.innerText = `${user.name}`
  userAddress.innerText = `${user.address}`
  userEmail.innerText = `${user.email}`
  userStride.innerText = ` Stride Length: ${user.strideLength}`
  userStepGoal.innerText = `Step Goal: ${user.dailyStepGoal}`
}

function createUser () {
  userRepository.findUserById(1)
  const newUser = userRepository.createNewUser()
  return newUser
}

function updateActivityCard(user) {
  stepGoalAll.innerText = `Average Step Goal All: ${userRepository.calculateAverageStepGoal()}`
  userStepGoal.innerText = `User Step Goal ${user.dailyStepGoal}`
}

function loadUserProfle() {
  createUser()
  updateWelcomeMessage(createUser())
  updateUserProfile(createUser())
  updateActivityCard(createUser())
}


// function createNewUser() {
//   const userRepository = new UserRepository(userData)
//   const userDataObject = userRepository.findUserById(1)
//   const newUser = new User(userDataObject)
//   console.log(newUser)
//   return newUser
// }
