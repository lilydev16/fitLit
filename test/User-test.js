import { expect } from 'chai';
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('User', () => {
  let user, userData, hydrationData
  beforeEach(function() {
    userData = {
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
     }

     user = new User(userData);

     hydrationData = [
       {
         "userID": 1,
         "date": "2019/06/16",
         "numOunces": 69
     },
       {
         "userID": 2,
         "date": "2019/06/15",
         "numOunces": 75
       }
     ]
  })
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should instantiate a User', function () {

    expect(user).to.be.an.instanceof(User)
  });

  it('should keep track of a user id', function() {

    expect(user.id).to.equal(userData.id);
  });

  it('should keep track of a user name', function() {

    expect(user.name).to.equal(userData.name);
  });

  it('should keep track of a user address', function() {

    expect(user.address).to.equal(userData.address);
  });

  it('should keep track of a user email', function() {

    expect(user.email).to.equal(userData.email);
  });

  it('should keep track of a user stride length', function() {

    expect(user.strideLength).to.equal(userData.strideLength);
  });

  it('should keep track of a user daily step goal', function() {

    expect(user.dailyStepGoal).to.equal(userData.dailyStepGoal);
  });

  it('should keep track of a user friends', function() {

    expect(user.friends).to.eql(userData.friends);
  });

  it('should return the user first name', function() {

    expect(user.returnFirstName()).to.equal('Luisa');
  })

  it('should instantiate a new hydration instance', function() {

    const hydration = new Hydration(hydrationData)

    expect(user.createNewHydrationData()).to.be.an.instanceof(Hydration)
    expect(user.userHydration).to.be.an.instanceof(Hydration)
  })

})
