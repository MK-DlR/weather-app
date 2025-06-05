// api-search.js
export const greeting = "Hello, Odinite!";

export async function getWeather() {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/montreal?key=TXQZ7DW5D94ZHWUHPN55WM432",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}
