// import userData from './data/users'
import User from './User'

//*
class UserRepository {
  constructor(data){
    this.data = data;
    this.userData = data.userData;
    this.hydrationData = data.hydrationData;
    this.currentUser = {}
  }

//*
  createNewUser(id) {
    const userData = this.userData.find(user => user.id === id)
    const hydrationData = this.hydrationData.filter(entry => entry.userID === id)
    const newUser = new User(userData, hydrationData)
    this.currentUser = newUser
    return newUser
  }

  findFriendsById(id) {
    const friend = this.userData.find(friend => friend.id === id)
    return friend
  }

  calculateAverageStepGoal() {
    const totalSteps = this.userData.reduce((total, num) => {
      return total += num.dailyStepGoal
    }, 0)
    return totalSteps / this.userData.length
  }

  createUserFriendList() {
    const friendIds = this.currentUser.friends
    const foundFriends = friendIds.map(friendId => {
      return this.findFriendsById(friendId).name
    })
    return foundFriends
  }
}

export default UserRepository;









// Scripts instantiates a new UserRepository within the fetch function
/* 

👥 UserRepository ->
    - holds all of the data (userData, hydrationData, sleepData)
    - can create new User instance, find & return friends, calculate
    averages across the data
    - responsible for 
    
  👤 User ->
    - holds an individual user's information
    - can create a new Hyrdration profile instance
    - responsible for ...

     💧 HydrationProfile ->
        - holds one user's hydration profile 
        - responsible for:
          * calculating how much water user consumes on any given day
          * how much water user has consumed over 1 week
          * average daily amount of water user has ever consumed

*/