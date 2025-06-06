// toggle-temp.js
let currentUnit = "F";
let originalTempF = null;
let originalFeelsF = null;
let originalHighF = null;
let originalLowF = null;

export function initializeTemperature(tempF, feelsF, highF, lowF) {
  originalTempF = tempF;
  originalFeelsF = feelsF;
  originalHighF = highF;
  originalLowF = lowF;
  // reset unit to F when data loads
  currentUnit = "F";
}

export function toggleTemp() {
  const tempElement = document.querySelector(".displayTemperature");
  const feelsLikeElement = document.querySelector(".displayFeelsLike");
  const highElement = document.querySelector(".displayHigh");
  const lowElement = document.querySelector(".displayLow");

  if (!tempElement || !feelsLikeElement || !highElement || !lowElement) return;

  console.log(
    "Before:",
    tempElement.textContent,
    feelsLikeElement.textContent,
    highElement.textContent,
    lowElement.textContent
  );

  if (currentUnit === "F") {
    // convert F to C using the stored original values
    const tempC = Math.round((originalTempF - 32) * (5 / 9) * 10) / 10;
    const feelsC = Math.round((originalFeelsF - 32) * (5 / 9) * 10) / 10;
    const highC = Math.round((originalHighF - 32) * (5 / 9) * 10) / 10;
    const lowC = Math.round((originalLowF - 32) * (5 / 9) * 10) / 10;

    // update display
    tempElement.textContent = `${tempC} °C`;
    feelsLikeElement.textContent = `${feelsC} °C`;
    highElement.textContent = `${highC} °C`;
    lowElement.textContent = `${lowC} °C`;
    currentUnit = "C";
  } else if (currentUnit === "C") {
    // convert back to original F values
    tempElement.textContent = `${originalTempF} °F`;
    feelsLikeElement.textContent = `${originalFeelsF} °F`;
    highElement.textContent = `${originalHighF} °F`;
    lowElement.textContent = `${originalLowF} °F`;
    currentUnit = "F";
  }

  console.log(
    "After:",
    tempElement.textContent,
    feelsLikeElement.textContent,
    highElement.textContent,
    lowElement.textContent
  );
}
