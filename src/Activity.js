class Activity {
  constructor(userActivityData) {
    this.activityData = userActivityData
  }

  calculateMilesPerDay(date, currentUser) {
    const todayData = this.activityData.find(activity => activity.date === date)
    const todayMiles = todayData.numSteps * currentUser.strideLength / 5280
    return Math.round(10 * todayMiles) / 10
  }

  minutesActivePerDay(date) {
    const todayMinutes = this.activityData.find(activity => activity.date === date)
    return todayMinutes.minutesActive
  }

  minutesActiveAveragePerWeek(date) {
    let findEntryDate = this.activityData.find(entry => entry.date === date);
    let startingIndex = this.activityData.indexOf(findEntryDate)
    let selectedWeek = this.activityData.slice(startingIndex, startingIndex + 7)
    let result = selectedWeek.reduce((sum, entry) => {
      return sum += entry.minutesActive
    }, 0)
    return result / selectedWeek.length
    }
  }





export default Activity;
