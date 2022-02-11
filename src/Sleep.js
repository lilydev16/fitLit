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

  calcAvgSleepQualityPerDay() {
    let total = this.sleepData.reduce((total, num) => {
      return total += num.sleepQuality
    }, 0)
    return Math.round(total / this.sleepData.length)
  }

  calcSleepPerDay(date) {
    let sleepHours = this.sleepData.find(entry => entry.date === date);
    
    return sleepHours.hoursSlept
  }

}

export default Sleep;
