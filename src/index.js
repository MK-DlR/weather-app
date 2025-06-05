// index.js

// imports
import "./styles.css";

import { getWeather } from "./get-weather.js";

import watermelonGif from "../watermelon.gif";

const image = document.createElement("img");
image.src = watermelonGif;

document.body.appendChild(image);

getWeather();
