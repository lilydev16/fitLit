import { expect } from 'chai';
import Sleep from '../src/Sleep';

describe('Sleep', () => {
  let sleep, sleepData
  beforeEach(function() {
    sleep = new Sleep()

    sleepData = [
      {userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2},
      {userID: 2, date: '2019/06/15', hoursSlept: 7, sleepQuality: 4.7},
      {userID: 3, date: '2019/06/15', hoursSlept: 10.8, sleepQuality: 4.7}
    ]

  })

  it('should be a function', function () {
    expect(Sleep).to.be.a('function');
  });

  it('should instantiate a Sleep', function () {

    expect(sleep).to.be.an.instanceof(Sleep)
  });


}
