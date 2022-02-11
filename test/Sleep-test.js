import { expect } from 'chai';
import Sleep from '../src/Sleep';

describe('Sleep', () => {
  let sleep, sleepData
  beforeEach(function() {

    sleepData = [
      {userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2},
      {userID: 2, date: '2019/06/15', hoursSlept: 7, sleepQuality: 4.7},
      {userID: 3, date: '2019/06/15', hoursSlept: 10.8, sleepQuality: 4.7},
      {userID: 5, date: '2019/06/17', hoursSlept: 10.5, sleepQuality: 3.7}
    ]

    sleep = new Sleep(sleepData)
  })

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  })

  it('should instantiate a Sleep', function () {
    expect(sleep).to.be.an.instanceof(Sleep)
  });

  it('should keep track of the sleep data', function() {
    expect(sleep.sleepData).to.eql(sleepData)
  });

  it('should calculate the average hours of sleep per day', function() {
    expect(sleep.calcAvgHoursPerDay()).to.equal(9)
  })

  it('should calculate the average sleep quality per day', function() {
    expect(sleep.calcAvgSleepQualityPerDay()).to.equal(4)
  })

  it('should calculate the sleep hours per day by the date', function() {
    expect(sleep.calcSleepPerDay('2019/06/17')).to.equal(10.5)
  })

})
