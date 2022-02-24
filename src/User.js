import Hydration from "./Hydration";
import Sleep from "./Sleep";

class User {
  constructor(userData, hydrationData, sleepData, activityData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
    this.userHydration = hydrationData;
    this.userSleep = sleepData;
    this.userActivity = activityData;
  };

  returnFirstName() {
    const splitName = this.name.split(' ');
    return splitName[0];
  };

  sortArray(array) {
    const sortedArray = array.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
    return sortedArray
  }

  createNewHydrationData() {
    const newHydration = new Hydration(this.sortArray(this.userHydration));
    this.userHydration = newHydration;
    return this.userHydration;
  };

  createNewSleepData() {
    const newSleep = new Sleep(this.sortArray(this.userSleep));
    this.userSleep = newSleep;
    return this.userSleep;
  };

  createNewActivityData() {
    const newActivity = new Activity(this.sortArray(this.userActivity));
    this.userActivity = newActivity;
    console.log('user', this.userActivity)
    return this.userActivity;
  }
};

export default User;
