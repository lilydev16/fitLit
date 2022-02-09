class Hydration {
  constructor(userHydrationData) {
    this.hydrationData = userHydrationData
  }

  calcOuncesPerDay(date) {
    console.log(this.hydrationData)
    let hydrationEntry = this.hydrationData.find(entry => entry.date === date);
    return hydrationEntry.numOunces
  }

}

export default Hydration;