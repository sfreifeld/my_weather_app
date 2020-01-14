let yourLocation = window.prompt("Please enter your city and state");
let mapurl = 'http://open.mapquestapi.com/geocoding/v1/address?key=yj4vcb4E2AudddXhAYWxgfLXWTvVBTEd&location=' + yourLocation;
let body = document.getElementById('response');
let weatherurl = 'https://api.darksky.net/forecast/961a89ad9a7a946551185c3dd74a2ab9/'

fetch(mapurl).then(function(response) {
    return response.json();
}).then(function(data) {
    return fetch(weatherurl + data.results[0].locations[0].latLng.lat + ',' + data.results[0].locations[0].latLng.lng);
}).then(function(response) {
    return response.json();
}).then(function(data) {
    body.innerText = data.currently.temperature + "°F";
})
