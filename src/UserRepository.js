import userData from './data/users'
import User from './User'

class UserRepository {
  constructor(data){
    this.data = data;
    this.currentUser = {}
  }

  createNewUser(id) {
    const user = this.data.find(user => user.id === id)
    const newUser = new User(user)
    this.currentUser = newUser
    return newUser
  }

  findFriendsById(id) {
    const friend = this.data.find(friend => friend.id === id)
    return friend
  }

  calculateAverageStepGoal() {
    const totalSteps = this.data.reduce((total, num) => {
      return total += num.dailyStepGoal
    }, 0)
    return totalSteps / this.data.length
  }

  // createNewUser() {
  //   const newUser = new User(this.currentUser)
  //   return newUser
  // }

  createUserFriendList() {
    const friendIds = this.currentUser.friends
    const foundFriends = friendIds.map(friendId => {
      return this.findFriendsById(friendId).name
    })
    return foundFriends
  }
}

export default UserRepository;
