function getWeather( cityID, key ) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)  
    .then(function(resp) { return resp.json() })
    .then(function(data) {
      getWeatherData(data);
    })
    .catch(function() {
    });
  }

  function getWeatherData( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	document.getElementById('temp').innerHTML = " " + celcius + '&deg;';
}

window.onload = function() {
    var cityID = '683914'; // Bragadiru
    var key = '4a82d2c8fc4ed92b503f02bbb79e80a9'; // API Key
    getWeather( cityID, key );
}