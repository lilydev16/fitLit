# :runner: **FitLit Project** :runner: #
---

## Abstract

FitLit is an application that tracks and displays fitness data in an easy to read, dynamic, user dashboard. This project showcases the ability to get/fetch/post information to/from an API, and display it in a stylish, easy to use UI.

---
## Links
* [GitHub Repository](https://github.com/maddielaw/FitLit)
---
## Contributors
* [Nicole Valentini](https://github.com/nvalentini21)
* [Maddie Law](https://github.com/maddielaw)
* [Lauralyn Watson](https://github.com/lswatson16)
---
## Tech Used
* Javascript
* CSS
* HTML
* Object Oriented Programming
* Git/GitHub
* Webpack
* Mocha/Chai
* Chart.js

---
## Installation/Set-Up
Click this [link](https://github.com/maddielaw/FitLit) to view the gitHub repository.
To view code on the text editor of your choice (I used atom to construct this code):

`Clone` [this repository](https://github.com/maddielaw/FitLit) in your terminal by entering using `git clone https://github.com/maddielaw/FitLit` and then `cd FitLit`. Run `npm install` to download all necessary packages and dependencies. Finally, run `npm start` and copy and paste the URL that is provided next to the "Your Project is Running at" statement.

---
## How To Use FitLit

Currently, the FitLit Dashboard displays all information for a random user in our API databases, initiated on page load. The user information is separated into the following sections: user profile, friends list, activity data, hydration data, and sleep data.

![gif](https://media.giphy.com/media/GgbmM5H1YPq9CqFd8P/giphy.gif)

### User Profile:

The user profile is located in the top right hand corner, and contains the following:
* User's full name
* Email address
* Stride Length
* Daily Step Goal
* A comparison chart between the user's step goal and the average step goal of the FitLit community:

![chart](https://media.giphy.com/media/K9s7WJD3knjVFuv9HZ/giphy.gif)

* A button to navigate to the form submission page, upon which users can enter new stats for sleep, hydration, and activity data.

## Data Submission Page

Upon clicking the `Log today's stats` button in the user profile section, users will be directed to a page that contains forms for submitting Activity, Hydration, or Sleep data. As long as all fields in the corresponding form are filled, the user can submit their new data, which is then POSTed to the locally hosted API. The user can then navigate back to the main page, which will reflect their newly posted data for the current date.


![chart2](https://media.giphy.com/media/j6yWb7GNtQir5B21Pu/giphy.gif)

### Friendlist

The friendlist is located in the bottom right hand corner, and contains the following:
* A list of all of the current user's friends by name.

### Hydration Data

Two widgets are used to represent hydration data:
* One widget contains the number of fluid ounces consumed on the current day
* One widget contains the data for how many ounces of water are consumed over a 7 day period.

### Sleep Data

Two widets are used to represent sleep data:
* One widget contains the hours slept, sleep quality, average sleep hours, and average sleep quality for the current date.
* One widget contains the data for sleep hours and quality over a 7 day period.

##Activity Data
Two widgets are sued to represent activity data:
* One widget contains the number of steps, minutes active, and miles walked for the current date.
* One widget contains the data for all of the activity stats over a 7 day period.
---
## Features:

* Fetching and displaying data from an API
* POSTing new information to the corresponding APIs via form input

---
## Future Additions

The current live project represents the completion of part I and II of a Turing School of Software and Design Module 2 ongoing project.

In the future, we plan to:

* Add icons for all of the widgets
* Add a user icon or photo for the current user and friends
* Continue to refactor our scripts.js file to separate DOM updates into the domUpdates object, located in the domUpdates.js file.


---
## Credits
* [*Turing School of Software and Design*](turing.edu)
* Our project manager, Nik Seif [@NikSeif](https://github.com/niksseif)
* Chart.js
