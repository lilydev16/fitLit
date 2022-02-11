class Sleep {
  constructor(userSleepData) {
    this.sleepData = userSleepData;
  }

  calcAvgHoursPerDay() {
    let total = this.sleepData.reduce((total, num) => {
      return total += num.hoursSlept
    }, 0)
    return Math.round(total / this.sleepData.length)
  }

  calculateAvgSleepQualityPerDay() {
    let total = this.sleepData.reduce((total, num) => {
      return total += num.sleepQuality
    }, 0)
    return Math.round(total / this.sleepData.length)
  }

}

export default Sleep;
