// search-button.js

import { searchForm } from "./search-form";

export function searchButton() {
  const searchFormButtonContainer = document.createElement("div");
  searchFormButtonContainer.classList.add("searchFormButtonContainer");

  const searchFormButton = document.createElement("BUTTON");
  searchFormButton.classList.add("searchFormButton");
  searchFormButton.textContent = "Search Again";

  content.appendChild(searchFormButtonContainer);
  searchFormButtonContainer.appendChild(searchFormButton);

  searchFormButton.addEventListener("click", function () {
    content.textContent = "";
    searchForm();
  });
}
