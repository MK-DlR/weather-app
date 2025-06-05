// index.js

// imports
import "./styles.css";
import { getWeather } from "./get-weather.js";
import { searchForm } from "./search-form.js";

// main content div
window.content = document.createElement("div");
window.content.classList.add("content");
document.body.appendChild(window.content);

// location search button
const searchFormButtonContainer = document.createElement("div");
searchFormButtonContainer.classList.add("searchFormButtonContainer");

const searchFormButton = document.createElement("BUTTON");
searchFormButton.textContent = "Search Location";

content.appendChild(searchFormButtonContainer);
searchFormButtonContainer.appendChild(searchFormButton);

searchFormButton.addEventListener("click", function () {
  content.textContent = "";
  searchForm();
});
