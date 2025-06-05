// search-form.js

import { searchWeather } from "./get-weather";

export function searchForm() {
  // form container
  const formContainer = document.createElement("div");
  formContainer.classList.add("formContainer");

  // main form
  const inputForm = document.createElement("FORM");
  inputForm.classList.add("inputForm");

  // zipcode input
  const zipcodeInputDiv = document.createElement("div");
  zipcodeInputDiv.classList.add("inputDiv");
  const zipcodeInputText = document.createElement("h4");
  zipcodeInputText.classList.add("inputText");
  zipcodeInputText.textContent = "Zipcode:";
  const zipcodeInput = document.createElement("INPUT");
  zipcodeInput.classList.add("inputBox");
  zipcodeInput.setAttribute("id", "zipcodeInput");

  // city input
  const cityInputDiv = document.createElement("div");
  cityInputDiv.classList.add("inputDiv");
  const cityInputText = document.createElement("h4");
  cityInputText.classList.add("inputText");
  cityInputText.textContent = "City/Town:";
  const cityInput = document.createElement("INPUT");
  cityInput.classList.add("inputBox");
  cityInput.setAttribute("id", "cityInput");

  // province input
  const provinceInputDiv = document.createElement("div");
  provinceInputDiv.classList.add("inputDiv");
  const provinceInputText = document.createElement("h4");
  provinceInputText.classList.add("inputText");
  provinceInputText.textContent = "Province/State:";
  const provinceInput = document.createElement("INPUT");
  provinceInput.classList.add("inputBox");
  provinceInput.setAttribute("id", "provinceInput");

  // country input
  const countryInputDiv = document.createElement("div");
  countryInputDiv.classList.add("inputDiv");
  const countryInputText = document.createElement("h4");
  countryInputText.classList.add("inputText");
  countryInputText.textContent = "Country:";
  const countryInput = document.createElement("INPUT");
  countryInput.classList.add("inputBox");
  countryInput.setAttribute("id", "countryInput");

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
  inputForm.appendChild(zipcodeInputDiv);
  zipcodeInputDiv.appendChild(zipcodeInputText);
  zipcodeInputDiv.appendChild(zipcodeInput);
  inputForm.appendChild(cityInputDiv);
  cityInputDiv.appendChild(cityInputText);
  cityInputDiv.appendChild(cityInput);
  inputForm.appendChild(provinceInputDiv);
  provinceInputDiv.appendChild(provinceInputText);
  provinceInputDiv.appendChild(provinceInput);
  inputForm.appendChild(countryInputDiv);
  countryInputDiv.appendChild(countryInputText);
  countryInputDiv.appendChild(countryInput);
  inputForm.appendChild(buttonContainer);
  buttonContainer.appendChild(submitInput);
  buttonContainer.appendChild(resetInput);

  // allow enter press to trigger search
  zipcodeInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchWeather();
    }
  });
}
