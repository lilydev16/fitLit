class Activity {
  constructor(userActivityData) {
    this.activityData = userActivityData
  }

  calculateMilesPerDay(date, currentUser) {
    const todayData = this.activityData.find(activity => activity.date === date)
    const todayMiles = todayData.numSteps * currentUser.strideLength / 5280
    console.log(todayMiles)
    return Math.round(10 * todayMiles) / 10
  }
}





export default Activity;
