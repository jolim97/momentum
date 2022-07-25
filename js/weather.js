const API_KEY = "551d4db0379441243a6405023c4fbc35";

function onGeoOk(position) {
    console.log(position);
    let lat;
    let lon;
    if (position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
    } else {
        lat = 37.541;
        lon = 126.986;
    }
    console.log(lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃ `;
        });
}

function onGeoError() {
    alert("Instead of weather of your location, weather for Yongsan-gu, Seoul, is provided.");
    onGeoOk();
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
