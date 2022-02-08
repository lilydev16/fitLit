import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User'

describe('User Repository', () => {
  let userRepository, userData
  beforeEach(function() {
    userData = [
     {
       "id": 1,
       "name": "Luisa Hane",
       "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
       "email": "Diana.Hayes1@hotmail.com",
       "strideLength": 4.3,
       "dailyStepGoal": 10000,
       "friends": [
         16,
         4,
         8
       ]
     },
     {
       "id": 2,
       "name": "Jarvis Considine",
       "address": "30086 Kathryn Port, Ciceroland NE 07273",
       "email": "Dimitri.Bechtelar11@gmail.com",
       "strideLength": 4.5,
       "dailyStepGoal": 5000,
       "friends": [
         9,
         18,
         24,
         19
       ]
     },
     {
       "id": 16,
       "name": "Garnett Cruickshank",
       "address": "992 Zita Mall, North Tremainemouth MA 19312-3532",
       "email": "Laverna47@hotmail.com",
       "strideLength": 3.9,
       "dailyStepGoal": 10000,
       "friends": [
         25,
         31,
         3,
         16
       ]
     },
     {
       "id": 4,
       "name": "Mae Connelly",
       "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
       "email": "Marcos_Pollich@hotmail.com",
       "strideLength": 3.1,
       "dailyStepGoal": 4000,
       "friends": [
         48,
         7,
         44,
         8
       ]
     },
     {
       "id": 8,
       "name": "Laney Abshire",
       "address": "86416 Koch Inlet, North Kaciefurt MA 80635",
       "email": "Janice_Nitzsche2@yahoo.com",
       "strideLength": 2.8,
       "dailyStepGoal": 2000,
       "friends": [
         11,
         41,
         23,
         49
       ]
     }
   ]
    userRepository = new UserRepository(userData)
  })

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate a UserRepository', function () {
    expect(userRepository).to.be.an.instanceof(UserRepository)
  })

  it('should keep track of a collection of user data', function () {
    expect(userRepository.data).to.eql(userData)

  })

  it('should keep track of the current user', function () {
    userRepository.findUserById(1)
    expect(userRepository.currentUser).to.eql(userData[0])
    userRepository.findUserById(2)
    expect(userRepository.currentUser).to.eql(userData[1])
  })

  it('should find a user by id, and return the user', function() {
    expect(userRepository.findUserById(1)).to.equal(userData[0])
  })

  it('should find a friend by id, and return the friend', function() {
    expect(userRepository.findFriendsById(2)).to.equal(userData[1])
  })

  it('should calculate average steps for all users', function() {
    expect(userRepository.calculateAverageStepGoal()).to.equal(6200)
  })

  it('should instantiate a new user based on the current user', function() {
    userRepository.findUserById(1)
    expect(userRepository.createNewUser()).to.be.an.instanceof(User)
  })

  it('should return the names of all of the Users friends', function() {
    expect(userRepository.findUserById(1)).to.equal(userData[0])
    expect(userRepository.currentUser.name).to.equal("Luisa Hane")
    expect(userRepository.currentUser.friends).to.eql([16, 4, 8])
    const friendNames = userRepository.createUserFriendList()
    expect(friendNames).to.eql(['Garnett Cruickshank', 'Mae Connelly', 'Laney Abshire'])
  })
});
