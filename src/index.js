// index.js
import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

import watermelonGif from "../watermelon.gif";

const image = document.createElement("img");
image.src = watermelonGif;

document.body.appendChild(image);
