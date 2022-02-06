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
     }]
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
    expect(userRepository.findUserById(2)).to.equal(userData[1])

  })


  it('should calculate average steps for all users', function() {
    expect(userRepository.calculateAverageStepGoal()).to.equal(7500)
  })

  it('should instantiate a new user based on the current user', function() {
    userRepository.findUserById(1)
    expect(userRepository.createNewUser()).to.be.an.instanceof(User)
  })
});
