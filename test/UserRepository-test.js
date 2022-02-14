import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';

describe('User Repository', () => {

  let userRepository, allData;

  beforeEach(function() {

    allData = {
      userData: [
        { id: 1,
          name: "Luisa Hane",
          address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
          email: "Diana.Hayes1@hotmail.com",
          strideLength: 4.3,
          dailyStepGoal: 10000,
          friends: [16, 4, 8],
          userHydration: [{"userID": 1,"date": "2019/06/15","numOunces": 37}],
          userSleep: [{userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2}]},
         { id: 2,
           name: "Jarvis Considine",
           address: "30086 Kathryn Port, Ciceroland NE 07273",
           email: "Dimitri.Bechtelar11@gmail.com",
           strideLength: 4.5,
           dailyStepGoal: 5000,
           friends: [9, 18, 24, 19]},
         { id: 16,
           name: "Garnett Cruickshank",
           address: "992 Zita Mall, North Tremainemouth MA 19312-3532",
           email: "Laverna47@hotmail.com",
           strideLength: 3.9,
           dailyStepGoal: 10000,
           friends: [25, 31, 3, 16]},
         { id: 4,
           name: "Mae Connelly",
           address: "28926 Schinner Islands, Turnermouth NE 23720-3230",
           email: "Marcos_Pollich@hotmail.com",
           strideLength: 3.1,
           dailyStepGoal: 4000,
           friends: [48,7,44,8]},
         { id: 8,
           name: "Laney Abshire",
           address: "86416 Koch Inlet, North Kaciefurt MA 80635",
           email: "Janice_Nitzsche2@yahoo.com",
           strideLength: 2.8,
           dailyStepGoal: 2000,
           friends: [11,41,23,49]}],
      hydrationData: [
          {userID: 1, date: "2019/06/15", numOunces: 37},
          {userID: 2, date: "2019/06/15", numOunces: 75},
          {userID: 3, date: "2019/06/15", numOunces: 47}],
      sleepData: [
          {userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2},
          {userID: 2, date: '2019/06/15', hoursSlept: 7, sleepQuality: 4.7},
          {userID: 3, date: '2019/06/15', hoursSlept: 10.8, sleepQuality: 4.7}]
    };

    userRepository = new UserRepository(allData);

  });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate a UserRepository', function () {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should keep track of a collection of user data', function () {
    expect(userRepository.userData).to.eql(allData.userData);
  });

  it('should be able to keep track of hydration data', function() {
    expect(userRepository.hydrationData).to.eql(allData.hydrationData);
  });

  it('should be able to keep track of sleep data', function() {
    expect(userRepository.sleepData).to.eql(allData.sleepData);
  });

  it('should keep track of the current user', function () {
    userRepository.createNewUser(1);
    expect(userRepository.currentUser.name).to.eql(allData.userData[0].name);
    expect(userRepository.currentUser).to.eql(allData.userData[0]);
  });

  it('should find a user by id, and return the user', function() {
    expect(userRepository.createNewUser(1)).to.eql(allData.userData[0]);
  });

  it('should find a friend by id, and return the friend', function() {
    expect(userRepository.findFriendsById(2)).to.equal(allData.userData[1]);
  });

  it('should calculate average steps & sleep stats for all users', function() {
    expect(userRepository.calcAvgStatsForAllUsers('dailyStepGoal', 'userData')).to.equal(6200);
    expect(userRepository.calcAvgStatsForAllUsers('sleepQuality', 'sleepData')).to.equal(4);
    expect(userRepository.calcAvgStatsForAllUsers('hoursSlept', 'sleepData')).to.equal(8);
  });

  it('should instantiate a new user based on the current user', function() {
    expect(userRepository.createNewUser(1)).to.be.an.instanceof(User);
  });

  it('should return the names of all of the Users friends', function() {
    expect(userRepository.createNewUser(1)).to.eql(allData.userData[0]);
    expect(userRepository.currentUser.name).to.equal("Luisa Hane");
    expect(userRepository.currentUser.friends).to.eql([16, 4, 8]);
    const friendNames = userRepository.createUserFriendList();
    expect(friendNames).to.eql(['Garnett Cruickshank', 'Mae Connelly', 'Laney Abshire']);
  });
});
