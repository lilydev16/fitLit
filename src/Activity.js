class Activity {
  constructor(userActivityData) {
    this.activityData = userActivityData
  }

  calculateMilesPerDay(date, currentUser) {
    const todayData = this.activityData.find(activity => activity.date === date)
    const todayMiles = todayData.numSteps * currentUser.strideLength / 5280
    return Math.round(10 * todayMiles) / 10
  }

  minutesActive(date) {
    const todayMinutes = this.activityData.find(activity => activity.date === date)
    return todayMinutes.minutesActive
  }
}





export default Activity;
