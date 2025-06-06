// display-data.js
import { processData } from "./process-data";
import { toggleTemp, initializeTemperature } from "./toggle-temp.js";
import { toggleButton } from "./toggle-button.js";

export function displayData(weatherText) {
  const displayContainer = document.createElement("div");
  displayContainer.classList.add("displayContainer");

  // define data structure for content
  const weatherData = [
    { label: "Date", value: weatherText[1], index: 1 },
    { label: "Location", value: weatherText[2], index: 2 },
    { label: "Description", value: weatherText[3], index: 3 },
    { label: "High", value: weatherText[4], index: 4 },
    { label: "Low", value: weatherText[5], index: 5 },
    { label: "Conditions", value: weatherText[6], index: 6 },
    { label: "Temperature", value: weatherText[7], index: 7 },
    { label: "Feels Like", value: weatherText[8], index: 8 },
    { label: "Chance of Precipitation", value: weatherText[9], index: 9 },
    { label: "Type of Precipitation", value: weatherText[10], index: 10 },
    { label: "Humidity", value: weatherText[11], index: 11 },
    { label: "Wind Speed", value: weatherText[12], index: 12 },
  ];

  const temperatureContainer = document.createElement("div");
  temperatureContainer.classList.add("temperatureContainer");

  const displayTemperature = document.createElement("h1");
  displayTemperature.classList.add("displayTemperature");
  // add °F suffix to temperature
  displayTemperature.textContent = `${weatherData[6].value} °F`;

  const feelsLikeLabel = document.createElement("div");
  feelsLikeLabel.classList.add("feelsLikeLabel");
  feelsLikeLabel.textContent = `${weatherData[7].label}: `;
  feelsLikeLabel.style.fontWeight = "bold";

  const displayFeelsLike = document.createElement("div");
  displayFeelsLike.classList.add("displayFeelsLike");
  // add °F suffix to feels like temperature
  displayFeelsLike.textContent = `${weatherData[7].value} °F`;

  displayContainer.appendChild(temperatureContainer);
  const tempRow = document.createElement("div");
  tempRow.classList.add("tempRow");

  tempRow.appendChild(displayTemperature);
  // pass tempRow instead of full temperatureContainer
  toggleButton(tempRow);

  const feelsLikeContainer = document.createElement("div");
  feelsLikeContainer.classList.add("feelsLikeContainer");
  feelsLikeContainer.appendChild(feelsLikeLabel);
  feelsLikeContainer.appendChild(displayFeelsLike);

  temperatureContainer.appendChild(tempRow);
  temperatureContainer.appendChild(feelsLikeContainer);

  // loop through data and create elements
  weatherData.forEach((item) => {
    // skip temperature and feels like
    if (item.index === 7 || item.index === 8) return;

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

  // initialize temperature with the current location values
  initializeTemperature(
    parseFloat(weatherData[5].value),
    parseFloat(weatherData[6].value)
  );

  content.appendChild(displayContainer);
}
