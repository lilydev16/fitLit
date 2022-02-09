class Hydration {
  constructor(id, userHydrationData) {
    this.id = id
    this.hydrationData = userHydrationData
  }
  filterDataById() {
    this.hydrationData.filter(entry => {
      this.id === entry.id;
      return entry
    })
  }

}

export default Hydration;