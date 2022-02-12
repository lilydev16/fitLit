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

  calcSleepStatsPerWeek(date) {
    let findentryDate = this.sleepData.find(entry => entry.date === date);
    let startingIndex = this.sleepData.indexOf(findentryDate)
    let selectedWeek = this.sleepData.slice(startingIndex, startingIndex + 7)
    let result = selectedWeek.map(entry => {
      let weeklySleep = {
        date: entry.date,
        hours: entry.hoursSlept,
        quality: entry.sleepQuality,
      }
      return weeklySleep
    })
    console.log(result)
    return result
  }
}

export default Sleep;
