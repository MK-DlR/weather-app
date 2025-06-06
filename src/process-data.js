// process-data.js
import { displayData } from "./display-data";

export function processData(weatherData) {
  const weatherObject = {
    weatherImage: `${weatherData.currentConditions.icon}`,
    now: `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`,
    location: `${weatherData.resolvedAddress}`,
    description: `${weatherData.description}`,
    high: `${weatherData.days[0].tempmax}`,
    low: `${weatherData.days[0].tempmin}`,
    conditions: `${weatherData.currentConditions.conditions}`,
    temperature: `${weatherData.currentConditions.temp}`,
    feelsLike: `${weatherData.currentConditions.feelslike}`,
    precipChance: `${weatherData.currentConditions.precipprob}%`,
    precipType:
      weatherData.currentConditions.preciptype === null
        ? "None"
        : weatherData.currentConditions.preciptype[0].charAt(0).toUpperCase() +
          weatherData.currentConditions.preciptype[0].slice(1),
    humidity: `${weatherData.currentConditions.humidity}%`,
    windSpeed: `${weatherData.currentConditions.windspeed} MPH`,
  };

  let weatherText = Object.values(weatherObject);
  displayData(weatherText);
}
