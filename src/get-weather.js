// get-weather.js

import { processData } from "./process-data";
import { searchForm } from "./search-form";

export async function getWeather() {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/st joseph de coleraine?key=TXQZ7DW5D94ZHWUHPN55WM432",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  processData(weatherData);
}

export async function searchWeather() {
  const zipcode = document.getElementById("zipcodeInput")?.value.trim();
  const city = document.getElementById("cityInput")?.value.trim();
  const province = document.getElementById("provinceInput")?.value.trim();
  const country = document.getElementById("countryInput")?.value.trim();

  let searchTerm = zipcode || city || "";
  if (province) searchTerm += `, ${province}`;
  if (country) searchTerm += `, ${country}`;

  if (!searchTerm) {
    alert("Please enter a location!");
    return;
  }

  // use the actual search term in the API call
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
      searchTerm
    )}?key=TXQZ7DW5D94ZHWUHPN55WM432`,
    { mode: "cors" }
  );

  if (!response.ok) {
    alert("Location not found or API error!");
    return;
  }

  content.textContent = "";
  const weatherData = await response.json();
  console.log(weatherData);
  processData(weatherData);
}
