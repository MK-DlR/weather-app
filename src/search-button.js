// search-button.js

import { searchForm } from "./search-form";
import { defaultBackground } from "./default-background";

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
    document.body.style.backgroundImage = "";
    defaultBackground();
    searchForm();
  });
}
