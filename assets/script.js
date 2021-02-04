var searchButton = $(".searchButton");

var apiKey = "44821f29d408bf65d936bfb44c1d747f";
//adds recent searches to the div
for (var i = 0; i < localStorage.length; i++) {
    var city = localStorage.getItem(i);
    var cityName = $(".reccent-seraches").addClass("recent-searches-item");

    cityName.append("<li>" + city + "</li>");
}

var clickCount = 0

//function for API calls
searchButton.click(function firstClick() {
    var searchInput = $(".searchInput").val();

    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + apiKey + "&units=imperial";
    var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid=" + apiKey + "&units=imperial";
//using ajax to call the API
    if (searchInput == "") {
        console.log(searchInput)
    }
    else {
        $.ajax({
            url: urlCurrent,
            method: 'GET'
        }).then(function (response) {
            var cityName = $(".recent-searches").addClass("recent-searches-item")
            cityName.append("<li>" + response.name + "</li>");
            console.log(response.name);

            var storage = localStorage.setItem(clickCount, response.name);
            clickCount = clickCount + 1;
        

            var currentWeather = $(".currentWeather").append("<div>").addClass("card-body");
            currentWeather.empty();
            var currentCity = currentWeather.append("<p>");
            currentWeather.append(currentCity);

            var date = new Date(response.dt * 1000).toLocaleDateString("en-us");
            console.log(response.dt);
            console.log(date);
            currentCity.append(response.name + " " + date);
            currentCity.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
            var cityTemperature = currentCity.append("<p>");
            currentCity.append(cityTemperature);
            cityTemperature.append("<p>" + "Temperature: " + response.main.temp + "</p>");
            cityTemperature.append("<p>" + "Humididty: " + response.main.humidity + "%" + "</p>");
            cityTemperature.append("<p>" + "Wind Speed: " + response.wind.speed + "</p>");
   
            var urlUV = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + response.coord.lat + '&lon=' + response.coord.lon + '&appid=' + apiKey;

            $.ajax({
            url: urlUV,
            method: 'GET'
            }).then(function (response) {
                var currentUV = cityTemperature.append("<p class=uvi>" + "UV Index: " + response.current.uvi + "</p>").addClass("card-text");
                currentUV.addClass("UV");
                cityTemperature.append(currentUV);

                if (response.current.uvi < 3) {
                    $(".uvi").addClass("UVgood")
                } 
                else if (response.current.uvi > 3 && response.current.uvi < 8) {
                    $(".uvi").addClass("UVmoderate")
                }
                else if (response.current.uvi > 8) {
                    $(".uvi").addClass("UVsevere");  
                };
            });
        });

        $.ajax({
            url: urlFiveDay,
            method: "GET"
        }).then(function (response) {
            var day = [0, 8, 16, 24, 32];
            var fiveDayForecast = $(".fiveDayForecast").addClass("card-body");
            var fiveDayDisplay = $(".fiveDayDisplay").addClass("card-text");
            fiveDayDisplay.empty();

            day.forEach(function (i) {
                var FiveDayTimeUTC1 = new Date(response.list[i].dt * 1000);
                FiveDayTimeUTC1 = FiveDayTimeUTC1.toLocaleDateString("en-US");

                fiveDayDisplay.append("<div>" + "<p>" + FiveDayTimeUTC1 + "</p>" + `<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">` + "<p>" + "Temperature: " + response.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + response.list[i].main.humidity + "%" + "</p>" + "</div>");
            
            })
        });
    } 
    
  
});
 


