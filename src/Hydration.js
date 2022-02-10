class Hydration {
  constructor(userHydrationData) {
    this.hydrationData = userHydrationData
  }

  calcOuncesPerDay(date) {
    console.log(this.hydrationData)
    let hydrationEntry = this.hydrationData.find(entry => entry.date === date);
    return hydrationEntry.numOunces
  }

  calcOuncesPerWeek() {

  }

  calcAverageOunces() {
    const totalOunces = this.hydrationData.reduce((total, entry) => {
      return total += entry.numOunces
    }, 0)
    return Math.round(totalOunces / this.hydrationData.length)
  }


}

export default Hydration;