// toggle-temp.js
let currentUnit = "F";
let originalTempF = null;
let originalFeelsF = null;

export function initializeTemperature(tempF, feelsF) {
  originalTempF = tempF;
  originalFeelsF = feelsF;
  // reset unit to F when new data loads
  currentUnit = "F";
}

export function toggleTemp() {
  const tempElement = document.querySelector(".displayTemperature");
  const feelsLikeElement = document.querySelector(".displayFeelsLike");

  if (!tempElement || !feelsLikeElement) return;

  console.log("Before:", tempElement.textContent, feelsLikeElement.textContent);

  if (currentUnit === "F") {
    // convert F to C using the stored original values
    const tempC = Math.round((originalTempF - 32) * (5 / 9) * 10) / 10;
    const feelsC = Math.round((originalFeelsF - 32) * (5 / 9) * 10) / 10;

    // update display
    tempElement.textContent = `${tempC} °C`;
    feelsLikeElement.textContent = `${feelsC} °C`;
    currentUnit = "C";
  } else if (currentUnit === "C") {
    // convert back to original F values
    tempElement.textContent = `${originalTempF} °F`;
    feelsLikeElement.textContent = `${originalFeelsF} °F`;
    currentUnit = "F";
  }

  console.log("After:", tempElement.textContent, feelsLikeElement.textContent);
}
