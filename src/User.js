import Hydration from "./Hydration";


class User {
  constructor(userData, hydrationData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
    this.userHydration = hydrationData;
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

}

export default User;
