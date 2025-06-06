// display-data.js
import { processData } from "./process-data";
import { toggleTemp } from "./toggle-temp.js";
import { toggleButton } from "./toggle-button.js";

export function displayData(weatherText) {
  const displayContainer = document.createElement("div");
  displayContainer.classList.add("displayContainer");

  // define data structure for content
  const weatherData = [
    { label: "Date", value: weatherText[1], index: 1 },
    { label: "Location", value: weatherText[2], index: 2 },
    { label: "Description", value: weatherText[3], index: 3 },
    { label: "Conditions", value: weatherText[4], index: 4 },
    { label: "Temperature", value: weatherText[5], index: 5 },
    { label: "Feels Like", value: weatherText[6], index: 6 },
    { label: "Chance of Precipitation", value: weatherText[7], index: 7 },
    { label: "Type of Precipitation", value: weatherText[8], index: 8 },
    { label: "Humidity", value: weatherText[9], index: 9 },
    { label: "Wind Speed", value: weatherText[10], index: 10 },
  ];

  const temperatureContainer = document.createElement("div");
  temperatureContainer.classList.add("temperatureContainer");

  const displayTemperature = document.createElement("h1");
  displayTemperature.classList.add("displayTemperature");
  // add °F suffix to temperature
  displayTemperature.textContent = `${weatherData[4].value} °F`;

  const feelsLikeLabel = document.createElement("div");
  feelsLikeLabel.classList.add("feelsLikeLabel");
  feelsLikeLabel.textContent = `${weatherData[5].label}: `;
  feelsLikeLabel.style.fontWeight = "bold";

  const displayFeelsLike = document.createElement("div");
  displayFeelsLike.classList.add("displayFeelsLike");
  // add °F suffix to feels like temperature
  displayFeelsLike.textContent = `${weatherData[5].value} °F`;

  displayContainer.appendChild(temperatureContainer);
  temperatureContainer.appendChild(displayTemperature);
  temperatureContainer.appendChild(feelsLikeLabel);
  temperatureContainer.appendChild(displayFeelsLike);

  // loop through data and create elements
  weatherData.forEach((item) => {
    // skip temperature and feels like
    if (item.index === 5 || item.index === 6) return;

    // create container for each weather info item
    const itemContainer = document.createElement("div");
    itemContainer.classList.add(
      `${item.label.toLowerCase().replace(/\s+/g, "")}Container`
    );

    // create header element
    const headerText = document.createElement("div");
    headerText.classList.add("weatherInfoHeader");
    headerText.textContent = `${item.label}: `;
    headerText.style.fontWeight = "bold";

    // create content element
    const contentElement = document.createElement("div");
    contentElement.classList.add("weatherInfoContent");
    // handle undefined values
    contentElement.textContent = item.value || "N/A";

    // append elements
    itemContainer.appendChild(headerText);
    itemContainer.appendChild(contentElement);
    displayContainer.appendChild(itemContainer);
  });

  toggleButton();
  content.appendChild(displayContainer);
}
