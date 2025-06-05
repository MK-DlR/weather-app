// process-data.js

export function processData(weatherData) {
  const weatherObject = {
    weatherImage: `${weatherData.currentConditions.icon}`,
    now: new Date(),
    location: `${weatherData.resolvedAddress}`,
    description: `${weatherData.description}`,
    temperature: `${weatherData.currentConditions.temp}`,
    feelsLike: `${weatherData.currentConditions.feelslike}`,
    precipChance: `${weatherData.currentConditions.precipprob}%`,
    precipType:
      weatherData.currentConditions.preciptype === null
        ? "None"
        : weatherData.currentConditions.preciptype[0],
    humidity: `${weatherData.currentConditions.humidity}%`,
    windSpeed: `${weatherData.currentConditions.windspeed} mph`,
  };

  let weatherText = Object.values(weatherObject);
  console.log(weatherText);
}
