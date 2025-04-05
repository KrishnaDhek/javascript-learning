const apiKey = '4210ed527e25a0e7ae99fe4a5ad35cef';
const apiURL =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const errorDiv = document.querySelector('.error');
const weatherDiv = document.querySelector('.weather');

async function checkWeather(city) {
  try {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    
    // Hide error message on success
    errorDiv.style.display = 'none';
    weatherDiv.style.display = 'block';

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    console.log('Weather Condition:', data.weather[0].main);

    // Update weather icon based on condition
    const weatherCondition = data.weather[0].main.toLowerCase();
    if (weatherCondition.includes('cloud')) {
      weatherIcon.src = './images/clouds.png';
    } else if (weatherCondition.includes('clear')) {
      weatherIcon.src = './images/clear.png';
    } else if (weatherCondition.includes('drizzle')) {
      weatherIcon.src = './images/drizzle.png';
    } else if (weatherCondition.includes('snow')) {
      weatherIcon.src = './images/snow.png';
    } else if (
      weatherCondition.includes('mist') ||
      weatherCondition.includes('fog')
    ) {
      weatherIcon.src = './images/mist.png';
    } else if (weatherCondition.includes('rain')) {
      weatherIcon.src = './images/rain.png';
    } else {
      weatherIcon.src = './images/default.png';
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    errorDiv.style.display = 'block';
    weatherDiv.style.display = 'none';
  }
}

// Function to handle search
function handleSearch() {
  const city = searchBox.value.trim();
  if (city) {
    checkWeather(city);
  } else {
    errorDiv.style.display = 'block';
    weatherDiv.style.display = 'none';
  }
}

// Event Listener for Search Button Click
searchBtn.addEventListener('click', handleSearch);

// Event Listener for Enter Key Press
searchBox.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});
