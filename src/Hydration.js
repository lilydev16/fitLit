class Hydration {
  constructor(userHydrationData) {
    this.hydrationData = userHydrationData
  };

  calcOuncesPerDay(date) {
    let hydrationEntry = this.hydrationData.find(entry => entry.date === date);
    return hydrationEntry.numOunces;
  };

  calcOuncesPerWeek() {
    let findEntryDate = this.hydrationData.find(entry => entry.date === date);
    let startingIndex = this.hydrationData.indexOf(findEntryDate)
    let slicedHydration = this.hydrationData.slice(startingIndex - 7, startingIndex);
    return slicedHydration.map(entry => {
      let weeklyHydration = {
        date: entry.date,
        ounces: entry.numOunces
      };
      return weeklyHydration;
    });
  };

  calcAverageOunces() {
    const totalOunces = this.hydrationData.reduce((total, entry) => {
      return total += entry.numOunces;
    }, 0);
    return Math.round(totalOunces / this.hydrationData.length);
  };
};

export default Hydration;
