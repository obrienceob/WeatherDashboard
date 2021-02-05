# WeatherDashboard
[Installation]
To get this webpage running, visit the website at https://obrienceob.github.io/WeatherDashboard/

If it is not on a github repository yet, you'll need a text editor. I reccomend VS Code. Download the zip file or code, or use GitHub's instructions to create a new repo. Uplaod the index.html, Develop folder with the script.js and style.css files to github using the git add, commit, and push commands.

Then ensure the file uploaded, open up the setting in your repo, and scroll down to the pages section. Change the source to "main" or "master" and save. 



[Usage]
At the top of the page you'll a search bar.

Search for a city of your choice. THe current weather will display, with the date, city, temperatrue, humidity, windspeed, and UV index displayed in the current weather box. The UV will change color based on the severity of UV eposure. There is also a box that displays the 5 day forecast. There are icons for each weather display as well. Recent searches will display below the search bar.


Here is a screenshot of the weather dashboard app

<img src="./WeatherDashboard/assets/WeatherDashboard.png" alt="screenshot of weather dashboard">


[Code]

This project contains a html file with a card div structure from bootstrap to store the weather dashboard app. There is a css sheet to define the styling of the UV displays mostly. Linked font awesome for buttons and fonts, bootstrap for styling, jquery, and cloudflare for jquery work. API calls to openweather.org, using the current weather, UV, and 5 day forecast calls. 

The javascript code defines the function of the weather app.

The functions contain third party API calls to pull the exact time and date from https://momentjs.com/



    

[Credits]

Author of code: Conor O'Brien

Following tutorials available here: 
    https://www.w3schools.com/
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
    https://momentjs.com/



[License]

MIT License

Copyright (c) [2020] [Conor O'Brien]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

