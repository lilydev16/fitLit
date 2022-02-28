import { expect } from 'chai';
import Activity from '../src/Activity';
import User from '../src/User'


describe('Activity', () => {

  let activity, activityData, userData, user, sleepData, hydrationData, userWeekActivityData

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
    "userID": 1,
    "date": "2019/06/16",
    "numSteps": 4294,
    "minutesActive": 138,
    "flightsOfStairs": 10
    },
    {
    "userID": 1,
    "date": "2019/06/17",
    "numSteps": 7402,
    "minutesActive": 116,
    "flightsOfStairs": 33
    },
    {
    "userID": 1,
    "date": "2019/06/18",
    "numSteps": 3486,
    "minutesActive": 114,
    "flightsOfStairs": 32
    },
    {
    "userID": 1,
    "date": "2019/06/19",
    "numSteps": 11374,
    "minutesActive": 213,
    "flightsOfStairs": 13
    },
    {
    "userID": 1,
    "date": "2019/06/20",
    "numSteps": 14810,
    "minutesActive": 287,
    "flightsOfStairs": 18
    },
    {
    "userID": 1,
    "date": "2019/06/21",
    "numSteps": 14810,
    "minutesActive": 287,
    "flightsOfStairs": 18
  }]

  activity = new Activity(activityData);

  userWeekActivityData = [
  {userID: 1, date: '2020/01/16', numSteps: 5378, minutesActive: 32, flightsOfStairs: 33},
  {userID: 1, date: '2020/01/17', numSteps: 4044, minutesActive: 89, flightsOfStairs: 4},
  {userID: 1, date: '2020/01/18', numSteps: 9971, minutesActive: 271, flightsOfStairs: 44},
  {userID: 1, date: '2020/01/19', numSteps: 5861, minutesActive: 73, flightsOfStairs: 19},
  {userID: 1, date: '2020/01/20', numSteps: 7446, minutesActive: 289, flightsOfStairs: 47},
  {userID: 1, date: '2020/01/21', numSteps: 2678, minutesActive: 253, flightsOfStairs: 44},
  {userID: 1, date: '2022/01/22', numSteps: 3278, minutesActive: 133, flightsOfStairs: 30},
  {userID: 1, date: '2022/01/23', numSteps: 3200, minutesActive: 23, flightsOfStairs: 2}]

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

  it ('should return the minutes active for a user on a specific day', function() {
    expect(activity.calcActivityDailyStats("2019/06/15", "minutesActive")).to.eql(140)
    expect(activity.calcActivityDailyStats("2019/06/15", "numSteps")).to.eql(3577)
    expect(activity.calcActivityDailyStats("2019/06/15", "flightsOfStairs")).to.eql(16)

  })

  it ('should calculate the average minutes active over a week for a user', function() {
    expect(activity.minutesActiveAveragePerWeek("2019/06/15")).to.eql(185)
  })

  it ('should calculate the activity stats over a week for a user', function() {
    activity.activityData = userWeekActivityData;
    console.log(activity.activityData)

    expect(activity.calcActivityStatsPerWeek("2020/01/22")).to.eql([
      {date: '2020/01/16', steps: 5378, minActive: 32, stairs: 33},
      {date: '2020/01/17', steps: 4044, minActive: 89, stairs: 4},
      {date: '2020/01/18', steps: 9971, minActive: 271, stairs: 44},
      {date: '2020/01/19', steps: 5861, minActive: 73, stairs: 19},
      {date: '2020/01/20', steps: 7446, minActive: 289, stairs: 47},
      {date: '2020/01/21', steps: 2678, minActive: 253, stairs: 44},
      {date: '2022/01/22', steps: 3278, minActive: 133, stairs: 30}])
  })

  it('should evaluate if a user reached their step goal for a given day', function() {
    expect(activity.reachedStepGoal("2019/06/15", userData)).to.eql(false)
    expect(activity.reachedStepGoal("2019/06/19", userData)).to.eql(true)
  })

  it('should find all the days a user exceeds their step goal', function() {
    expect(activity.filterStepGoalWins(userData)).to.eql([ "2019/06/19","2019/06/20","2019/06/21"])
  })

  it('should return the user\'s all time climbing record', function () {
    expect (activity.findClimbingRecord()).to.eql(33)
  })
})
