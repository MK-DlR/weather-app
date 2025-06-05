// search-form.js

import { searchWeather } from "./search-weather";

export function searchForm() {
  // form container
  const formContainer = document.createElement("div");
  formContainer.classList.add("formContainer");

  // main form
  const inputForm = document.createElement("FORM");
  inputForm.classList.add("inputForm");

  // single search input
  const searchInputDiv = document.createElement("div");
  searchInputDiv.classList.add("inputDiv");
  const searchInputText = document.createElement("h4");
  searchInputText.classList.add("searchText");
  searchInputText.textContent = "Enter a location to search...";
  const searchInput = document.createElement("INPUT");
  searchInput.classList.add("inputBox");
  searchInput.setAttribute("id", "searchInput");

  // button container
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");

  // submit button
  const submitInput = document.createElement("INPUT");
  submitInput.classList.add("inputButton");
  submitInput.type = "submit";
  submitInput.value = "Submit";

  // event listener to search weather at given location
  submitInput.addEventListener("click", function (event) {
    // prevent form submission
    event.preventDefault();
    searchWeather();
  });

  // reset button
  const resetInput = document.createElement("INPUT");
  resetInput.classList.add("inputButton");
  resetInput.type = "reset";
  resetInput.value = "Reset";

  // append elements to DOM
  content.appendChild(formContainer);
  formContainer.appendChild(inputForm);
  inputForm.appendChild(searchInputDiv);
  searchInputDiv.appendChild(searchInputText);
  searchInputDiv.appendChild(searchInput);
  inputForm.appendChild(buttonContainer);
  buttonContainer.appendChild(submitInput);
  buttonContainer.appendChild(resetInput);

  // allow enter press to trigger search
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // prevent form submission
      event.preventDefault();
      searchWeather();
    }
  });
}
