let mapkey = config.MAP_KEY;
var weatherkey = config.WEATHER_KEY;
let yourLocation = window.prompt("Please enter your city and state");
let mapurl = 'http://open.mapquestapi.com/geocoding/v1/address?key=' + mapkey + '&location=' + yourLocation;
let body = document.getElementById('response');
let weatherurl = 'https://api.darksky.net/forecast/' + weatherkey + '/';

fetch(mapurl).then(function(response) {
    return response.json();
}).then(function(data) {
    return fetch(weatherurl + data.results[0].locations[0].latLng.lat + ',' + data.results[0].locations[0].latLng.lng);
}).then(function(response) {
    return response.json();
}).then(function(data) {
    body.innerText = data.currently.temperature + "°F";
})
