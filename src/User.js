import Hydration from "./Hydration";
import Sleep from "./Sleep";


class User {
  constructor(userData, hydrationData, sleepData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
    this.userHydration = hydrationData;
    this.userSleep = sleepData;
  }

  returnFirstName() {
    const splitName = this.name.split(' ');
    return splitName[0];
  }

  createNewHydrationData() {
    const newHydration = new Hydration(this.userHydration);
    this.userHydration = newHydration
    return this.userHydration
  }

  createNewSleepData() {
    const newSleep = new Sleep(this.userSleep);
    this.userSleep = newSleep
    return this.userSleep
  }

}

export default User;
