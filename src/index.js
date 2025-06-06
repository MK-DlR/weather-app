// index.js

// imports
import "./styles.css";
import { searchWeather } from "./search-weather.js";
import { searchForm } from "./search-form.js";
import { defaultBackground } from "./default-background";

// main content div
window.content = document.createElement("div");
window.content.classList.add("content");
document.body.appendChild(window.content);

defaultBackground();
searchForm();
