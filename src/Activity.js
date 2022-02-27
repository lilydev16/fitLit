class Activity {
  constructor(userActivityData) {
    this.activityData = userActivityData
  }

  calculateMilesPerDay(date, currentUser) {
    const todayData = this.activityData.find(activity => activity.date === date)
    const todayMiles = todayData.numSteps * currentUser.strideLength / 5280
    return Math.round(10 * todayMiles) / 10
  }

  // minutesActivePerDay(date) {
  //   const todayMinutes = this.activityData.find(activity => activity.date === date)
  //   return todayMinutes.minutesActive
  // }

  calcActivityDailyStats(date, type) {
    const dailyData = this.activityData.find(activity => activity.date === date);
    return dailyData[type]
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

  calcActivityStatsPerWeek(date) {
    let findEntryDate = this.activityData.find(entry => entry.date === date);
    let startingIndex = this.activityData.indexOf(findEntryDate)
    let selectedWeek = this.activityData.slice(startingIndex - 7, startingIndex)
    let result = selectedWeek.map(entry => {
      let weeklyActivity = {
        date: entry.date,
        steps: entry.numSteps,
        minActive: entry.minutesActive,
        stairs: entry.flightsOfStairs
      }
      return weeklyActivity
    })
    return result
  };

  reachedStepGoal(date, currentUser) {
      let todayEntry = this.activityData.find(entry => entry.date === date);
      if (todayEntry.numSteps >= currentUser.dailyStepGoal){
        return true
      } else {
        return false
      }
    }

    filterStepGoalWins(currentUser) {
      const exceedGoal = this.activityData.filter(activity => activity.numSteps > currentUser.dailyStepGoal)
      return exceedGoal.map(activity => activity.date)
    }

    findClimbingRecord() {
      const climbData = this.activityData.map(activity => activity.flightsOfStairs)
      return Math.max(...climbData)
    }
  }







export default Activity;
