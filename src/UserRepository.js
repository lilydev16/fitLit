import userData from './data/users'

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
    const averageSteps = this.data.reduce((total, num) => {
      let result = total.dailyStepGoal
      result += num.dailyStepGoal
      const averageTotal = result / this.data.length
      return averageTotal
    })
    return averageSteps
  }
}

export default UserRepository;
