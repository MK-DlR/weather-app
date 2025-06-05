// index.js
import "./styles.css";
import { greeting } from "./api-search.js";
import { getWeather } from "./api-search.js";

console.log(greeting);

import watermelonGif from "../watermelon.gif";

const image = document.createElement("img");
image.src = watermelonGif;

document.body.appendChild(image);

getWeather();
