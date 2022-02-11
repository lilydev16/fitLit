class Sleep {
  constructor(userSleepData) {
    this.sleepData = userSleepData;
  }

  calcAvgSleepStats(type) {
    let total = this.sleepData.reduce((total, num) => {
      return total += num[type]
    }, 0)
    return Math.round(total / this.sleepData.length)
  }

  calcSleepStatsPerDay(date, type) {
    let sleepHours = this.sleepData.find(entry => entry.date === date);
    return sleepHours[type]
  }

  calcSleepStatsPerWeek(date, type) {
    let findentryDate = this.sleepData.find(entry => entry.date === date);
    let startingIndex = this.sleepData.indexOf(findentryDate)
    let selectedWeek = this.sleepData.slice(startingIndex, startingIndex + 7)
    return selectedWeek.map(entry => {
      return entry[type]
    })
  }
}

export default Sleep;
