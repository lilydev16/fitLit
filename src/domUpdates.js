
let domUpdates = {
  updateUserProfile: function (user, data) {
    userName.innerText = `${user.name}`;
    userAddress.innerText = `${user.address}`;
    userEmail.innerText = `${user.email}`;
    userStride.innerText = `${user.strideLength}`;
    userStepGoal.innerText = `${user.dailyStepGoal}`;
  },

  resetInnerHtml: function (selector) {
    selector.innerHTML = '';
  },

  updateFriends: function (friend) {
    friendList.innerHTML += `<p class="friend">${friend}</p>`
  },

  displayTodaysHydration: function (todayAmt) {
    todayHydration.innerText = `${todayAmt}`;
  },

  displayWeeklyHydration: function (weeklyHydrationAmt, i) {
    weeklyHydrationStats.innerHTML += `
    <table class="hydration-table">
      <tr>
        <th>Date</th>
        <th>Fluid Ounces</th>
      </tr>
      <tr>
        <td>${weeklyHydrationAmt[i].date}</td>
        <td>${weeklyHydrationAmt[i].ounces}</td>
      </tr>`;
  }
}

export default domUpdates;
