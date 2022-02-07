import userData from './data/users'
import User from './User'

class UserRepository {
  constructor(data){
    this.data = data;
    this.currentUser = {}
  }

  findUserById(id) {
    const user = this.data.find(user => user.id === id)
    this.currentUser = user
    return user
  }

  calculateAverageStepGoal() {
    const totalSteps = this.data.reduce((total, num) => {
      return total += num.dailyStepGoal
    }, 0)
    return totalSteps / this.data.length
  }

  createNewUser() {
    const newUser = new User(this.currentUser)
    console.log()
    return newUser
  }
}

export default UserRepository;
