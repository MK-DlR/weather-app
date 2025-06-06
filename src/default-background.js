// default-background.js

import defaultImage from "./weather-images/default.jpg";

export function defaultBackground() {
  document.body.style.backgroundImage = `url(${defaultImage})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
}
