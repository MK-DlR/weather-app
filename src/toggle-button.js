// toggle-button.js

import { toggleTemp } from "./toggle-temp";

export function toggleButton() {
  const toggleButtonContainer = document.createElement("div");
  toggleButtonContainer.classList.add("toggleButtonContainer");

  const toggleTempButton = document.createElement("BUTTON");
  toggleTempButton.classList.add("toggleTempButton");
  toggleTempButton.textContent = "Toggle Temperature";

  content.appendChild(toggleButtonContainer);
  toggleButtonContainer.appendChild(toggleTempButton);

  toggleTempButton.addEventListener("click", function () {
    // query for the elements before trying using
    const tempElement = document.querySelector(".displayTemperature");
    const feelsLikeElement = document.querySelector(".displayFeelsLike");

    toggleTemp();
  });
}
