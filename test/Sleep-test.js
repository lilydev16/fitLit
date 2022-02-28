import { expect } from 'chai';
import Sleep from '../src/Sleep';

describe('Sleep', () => {

  let sleep, sleepData, userWeekSleepData;

  beforeEach(function() {

    sleepData = [
      {userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2},
      {userID: 2, date: '2019/06/15', hoursSlept: 7, sleepQuality: 4.7},
      {userID: 3, date: '2019/06/15', hoursSlept: 10.8, sleepQuality: 4.7},
      {userID: 5, date: '2019/06/17', hoursSlept: 10.5, sleepQuality: 3.7}];

    sleep = new Sleep(sleepData);

    userWeekSleepData = [
      {userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2},
      {userID: 1, date: "2019/06/16", hoursSlept: 4.1, sleepQuality: 3.8},
      {userID: 1, date: "2019/06/18", hoursSlept: 10.4, sleepQuality: 3.1},
      {userID: 1, date: "2019/06/19", hoursSlept: 10.7, sleepQuality: 1.2},
      {userID: 1, date: "2019/06/20", hoursSlept: 9.3, sleepQuality: 1.2},
      {userID: 1, date: "2019/06/21", hoursSlept: 7.8, sleepQuality: 4.2},
      {userID: 1, date: '2019/06/22', hoursSlept: 10.8, sleepQuality: 4.7},
      {userID: 1, date: '2019/06/23', hoursSlept: 10.5, sleepQuality: 3.7}];
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should instantiate a Sleep', function () {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should keep track of the sleep data', function() {
    expect(sleep.sleepData).to.eql(sleepData);
  });

  it('should calculate the average hours of sleep and sleep quality per day', function() {
    expect(sleep.calcAvgSleepStats('hoursSlept')).to.equal(9);
    expect(sleep.calcAvgSleepStats('sleepQuality')).to.equal(4);
  });

  it('should calculate the sleep hours and sleep quality per day by the date', function() {
    expect(sleep.calcSleepStatsPerDay('2019/06/17', 'hoursSlept')).to.equal(10.5);
    expect(sleep.calcSleepStatsPerDay('2019/06/17', 'sleepQuality')).to.equal(3.7);
  });

  it('should calculate the hours slept in any given week', function() {
    sleep.sleepData = userWeekSleepData;

    expect(sleep.calcSleepStatsPerWeek('2019/06/22')).to.eql([
      {date: "2019/06/15", hours: 6.1, quality: 2.2},
      {date: "2019/06/16", hours: 4.1, quality: 3.8},
      {date: "2019/06/18", hours: 10.4, quality: 3.1},
      {date: "2019/06/19", hours: 10.7, quality: 1.2},
      {date: "2019/06/20", hours: 9.3, quality: 1.2},
      {date: "2019/06/21", hours: 7.8, quality: 4.2},
      {date: "2019/06/22", hours: 10.8, quality: 4.7}]);
  });
});
