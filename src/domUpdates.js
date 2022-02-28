
let domUpdates = {
  updateUserProfile: function (user, data) {
    userName.innerText = `${user.name}`;
    userAddress.innerText = `${user.address}`;
    userEmail.innerText = `${user.email}`;
    userStride.innerText = `${user.strideLength}`;
    userStepGoal.innerText = `${user.dailyStepGoal}`;
  },

  updateFriends: function (friend) {
    friendList.innerHTML += `<p class="friend">${friend}</p>`
  },

  displayTodaysHydration: function (todayAmt) {
    todayHydration.innerText = `${todayAmt}`;
  },

  displayWeeklyHydration: function (hydrationAmt, index) {
    weeklyHydrationStats.innerHTML += `
    <table class="hydration-table">
      <tr>
        <th>Date</th>
        <th>Fluid Ounces</th>
      </tr>
      <tr>
        <td>${hydrationAmt[index].date}</td>
        <td>${hydrationAmt[index].ounces}</td>
      </tr>`;
  }
}

export default domUpdates;
