import User from './User'

class UserRepository {
  constructor(data){
    this.data = data;
    this.userData = data.userData;
    this.hydrationData = data.hydrationData;
    this.sleepData = data.sleepData;
    this.currentUser = {}
  }

  createNewUser(id) {
    const userData = this.userData.find(user => user.id === id)
    const hydrationData = this.hydrationData.filter(entry => entry.userID === id)
    const sleepData = this.sleepData.filter(entry => entry.userID === id)
    const newUser = new User(userData, hydrationData, sleepData)
    this.currentUser = newUser
    return newUser
  }

  findFriendsById(id) {
    const friend = this.userData.find(friend => friend.id === id)
    return friend
  }

  createUserFriendList() {
    const friendIds = this.currentUser.friends
    const foundFriends = friendIds.map(friendId => {
      return this.findFriendsById(friendId).name
    })
    return foundFriends
  }

  calcAvgStatsForAllUsers(type, dataSet) {
    const total = this[dataSet].reduce((total, num) => {
      return total += num[type]
    }, 0)
    return Math.round(total / this[dataSet].length)
  }
}

export default UserRepository;
