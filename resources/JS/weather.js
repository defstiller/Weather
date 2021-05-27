var temp;  						// WEATHER API START 
var weather;
function getLocation() {
	if (navigator.geolocation) {
		let options = {timeout:50000, enableHighAccuracy:true, maximumAge: 200000}
	  navigator.geolocation.getCurrentPosition(showLocation,error, options);
	} else { 
	  window.alert = "Geolocation is not supported by this browser.";
	}
  }
  function error(err){
	  if(err.code ==1 ) {
		  console.log("Denied");
	  }
	  else if (err.code == 2 ){
		  console.log("Position is unavailable")
	  }
  }
  function showLocation(position) {
	  var lat = position.coords.latitude;
	  var lon = position.coords.longitude;
	  fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=e5c0ad89eb574fc607f213c86ece74da&units=imperial")
	  .then(response => {
		  return response.json();
		  })
	  .then (responseData => {
		  weather = responseData.weather[0].description;
		  temp = Math.floor(responseData.main.temp);
		  document.getElementById("tempF").innerHTML = temp +" &#176F";
		  bkgWeather();
	  })
	  .catch(err => {
		  console.error(err);
	  });
  }

  window.addEventListener("load", getLocation);
   							// WEATHER API END
const body = document.getElementById("html")
function bkgWeather() {
switch(weather) {
	case "broken clouds": body.style.backgroundImage = "url(./resources/images/some-clouds.jpg)"
	break;
	case "moderate rain": body.style.backgroundImage = "url(./resources/images/moderate-rain.jpg)"
	break;
	case "light rain": body.style.backgroundImage = "url(./resources/images/light-rain.jpg)"
	break;
	case "heavy rain": body.style.backgroundImage = "url(./resources/images/heavy-rain.jpg)"
	break;
	case "scattered clouds": body.style.backgroundImage = "url(./resources/images/some-clouds.jpg)"
	break;
	case "overcast clouds": body.style.backgroundImage = "url(./resources/images/heavy-clouds.jpg)"
	break;
	case "light snow": body.style.backgroundImage = "url(./resources/images/light-snow.jpg)"
	break;
	case "heavy snow": body.style.backgroundImage = "url(./resources/images/heavy-snow.jpg)"
	break;
	case "clear sky": body.style.backgroundImage = "url(./resources/images/clear.jpg)"
	break;

		}
	
}