// get-weather.js

import { processData } from "./process-data";

export async function getWeather() {
  const requestURL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/st joseph de coleraine?key=TXQZ7DW5D94ZHWUHPN55WM432";

  const request = new Request(requestURL);

  const response = await fetch(request);
  const weatherData = await response.json();

  console.log(weatherData);

  processData(weatherData);
}
