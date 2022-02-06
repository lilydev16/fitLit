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


//Event Listeners -----------------------------------------------------------------------------

window.addEventListener('load', loadUserProfile)

//global variable -----------------------------------------------------------------------------

const userRepository = new UserRepository(userData)

//functions --------------------------------------------------------------------------------------

function loadUserProfile () {
  userRepository.findUserById(1)
  const newUser = userRepository.createNewUser()
  console.log(newUser.address)
}


// function createNewUser() {
//   const userRepository = new UserRepository(userData)
//   const userDataObject = userRepository.findUserById(1)
//   const newUser = new User(userDataObject)
//   console.log(newUser)
//   return newUser
// }
