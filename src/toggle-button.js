// toggle-button.js

import { toggleTemp } from "./toggle-temp";

export function toggleButton(container) {
  const toggleButtonContainer = document.createElement("div");
  toggleButtonContainer.classList.add("toggleButtonContainer");

  const toggleTempButton = document.createElement("button");
  toggleTempButton.classList.add("toggleTempButton");
  toggleTempButton.textContent = "°F/°C";

  toggleButtonContainer.appendChild(toggleTempButton);
  container.appendChild(toggleButtonContainer); // append inside temperatureContainer

  toggleTempButton.addEventListener("click", function () {
    const tempElement = document.querySelector(".displayTemperature");
    const feelsLikeElement = document.querySelector(".displayFeelsLike");
    toggleTemp();
  });
}
