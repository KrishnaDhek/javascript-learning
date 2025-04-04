const apiKey = "4210ed527e25a0e7ae99fe4a5ad35cef";
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=london';

async function checkWeather() {
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();
