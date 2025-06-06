// search-weather.js

import { processData } from "./process-data";
import { searchForm } from "./search-form";
import { searchButton } from "./search-button";

export async function searchWeather() {
  const location = document.getElementById("searchInput")?.value.trim();

  let searchTerm = location;

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
  searchButton();
}
