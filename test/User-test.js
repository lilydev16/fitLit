import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {

  beforeEach(function() {
    userData = [
     {
       "id": 1,
       "name": "Mickey Mouse",
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
       "name": "Donald Duck",
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
    user = new User(userData)
  })

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should instantiate a User', function () {
    expect(user).to.be.an.instanceof(User);
  })

  it('should keep track of user data', function () {

  })



});
