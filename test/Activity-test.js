import { expect } from 'chai';
import Activity from '../src/Activity';
import User from '../src/User'


describe('Activity', () => {

  let activity, activityData, userData, user, sleepData, hydrationData

  beforeEach(function() {

    userData = {
      id: 1, name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
     };

  activityData = [
    {
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 3577,
    "minutesActive": 140,
    "flightsOfStairs": 16
    },
    {
    "userID": 2,
    "date": "2019/06/15",
    "numSteps": 4294,
    "minutesActive": 138,
    "flightsOfStairs": 10
    },
    {
    "userID": 3,
    "date": "2019/06/15",
    "numSteps": 7402,
    "minutesActive": 116,
    "flightsOfStairs": 33
    },
    {
    "userID": 4,
    "date": "2019/06/15",
    "numSteps": 3486,
    "minutesActive": 114,
    "flightsOfStairs": 32
    },
    {
    "userID": 5,
    "date": "2019/06/15",
    "numSteps": 11374,
    "minutesActive": 213,
    "flightsOfStairs": 13
    },
    {
    "userID": 6,
    "date": "2019/06/15",
    "numSteps": 14810,
    "minutesActive": 287,
    "flightsOfStairs": 18
    }]

activity = new Activity(activityData);

  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should instantiate a Activity', function () {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should keep track of the activity data', function() {
    expect(activity.activityData).to.eql(activityData);
  });

  it ('should calculate the miles walked for a user on a specific day', function() {
    expect(activity.calculateMilesPerDay("2019/06/15", userData)).to.eql(2.9)
  })
})
