// index.js

// imports
import "./styles.css";
import { getWeather } from "./get-weather.js";
import { searchForm } from "./search-form.js";

// main content div
window.content = document.createElement("div");
window.content.classList.add("content");
document.body.appendChild(window.content);

searchForm();
