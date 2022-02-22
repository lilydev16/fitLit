

let domUpdates = {
  updateUserProfile: function (user, data) {
    userName.innerText = `${user.name}`;
    userAddress.innerText = `${user.address}`;
    userEmail.innerText = `${user.email}`;
    userStride.innerText = `${user.strideLength}`;
    userStepGoal.innerText = `${user.dailyStepGoal}`;
    createStepGoalChart(compareStepGoalChart, user, data);
    updateFriends(data);
    }
  }

export default domUpdates;
