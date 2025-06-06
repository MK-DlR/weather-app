// background-change.js

import { processData } from "./process-data";
import { displayData } from "./display-data";

import rainyImage from "./weather-images/rainy.jpg";
import snowyImage from "./weather-images/snowy.jpg";
import cloudyImage from "./weather-images/cloudy.jpg";
import sunnyImage from "./weather-images/sunny.jpg";

export function backgroundChange(weatherText) {
  if (weatherText[10] == "Rain") {
    document.body.style.backgroundImage = `url(${rainyImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
  } else if (weatherText[10] == "Snow") {
    document.body.style.backgroundImage = `url(${snowyImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
  } else if (weatherText[6] == "Clear") {
    document.body.style.backgroundImage = `url(${sunnyImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
  } else if (weatherText[6] == "Partially cloudy" || "Cloudy") {
    document.body.style.backgroundImage = `url(${cloudyImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
  }
}
