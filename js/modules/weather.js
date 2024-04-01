const weatherBlock = document.getElementById('weather')

async function loadWeather(e) {
  const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Hurghada&appid=MY_API_KEY'

  const response = await fetch(server, {
    method: 'GET',
  })

  const responseResult = await response.json()

  if (response.ok) {
    getWeather(responseResult)
  } else {
    weatherBlock.innerHTML = responseResult.message
  }
}

function getIcon(description, temp) {
  let icon

  switch (description.toLowerCase()) {
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
    case 'overcast clouds':
      icon = 'cloud'
      break

    case 'clear sky':
      icon = 'sun'
      break

    case 'haze':
    case 'smoke':
    case 'fog':
    case 'mist':
      icon = 'cloudFog'
      break

    case 'drizzle':
    case 'heavy intensity drizzle':
    case 'light intensity drizzle':
    case 'moderate rain':
    case 'light rain':
      icon = 'cloudRain'
      break

    case 'heavy intensity rain':
    case 'very heavy rain':
    case 'extreme rain':
    case 'shower rain':
    case 'heavy intensity shower rain':
    case 'squalls':
    case 'tornado':
      icon = 'cloudLightning'
      break

    case 'few clouds':
    case 'cloudy sky':
      icon = 'cloudSun'
      break

    default:
      if (temp < 0) icon = 'thermometerCold'
      else if (temp > 25) icon = 'thermometerHot'
      else icon = 'thermometerSimple'
  }

  return icon
}

function getWeather(data) {
  const location = data.name
  const temp = Math.round(data.main.temp)
  const description = data.weather[0].description

  const icon = getIcon(description, temp)

  const template = `
   <img src="./img/icons/weather/${icon}.svg" alt="${description}" class="weather-icon">
   <div><span class="weather-location">${location}, Red Sea</span> ${temp}° C</div>
   `

  weatherBlock.innerHTML = template
}

if (weatherBlock) {
  loadWeather()
}
