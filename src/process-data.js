// process-data.js

import { displayData } from "./display-data";

export function processData(weatherData) {
  const weatherObject = {
    weatherImage: `${weatherData.currentConditions.icon}`,
    now: new Date(),
    location: `${weatherData.resolvedAddress}`,
    description: `${weatherData.description}`,
    conditions: `${weatherData.currentConditions.conditions}`,
    temperature: `${weatherData.currentConditions.temp} F`,
    feelsLike: `${weatherData.currentConditions.feelslike} F`,
    precipChance: `${weatherData.currentConditions.precipprob}%`,
    precipType:
      weatherData.currentConditions.preciptype === null
        ? "None"
        : weatherData.currentConditions.preciptype[0],
    humidity: `${weatherData.currentConditions.humidity}%`,
    windSpeed: `${weatherData.currentConditions.windspeed} MPH`,
  };

  let weatherText = Object.values(weatherObject);
  displayData(weatherText);
}
