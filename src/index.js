import "./style.css";
import {
  createButton,
  createCarousel,
  createDropDown,
  createLayout,
} from "./dom";
import { dropDownEvent } from "./event";

document.addEventListener("DOMContentLoaded", main);

function main() {
  const body = document.getElementById("body");
  const layout = createLayout();
  body.appendChild(layout);
  body.querySelector("nav").appendChild(dropDownButton());
  body.querySelector("article").appendChild(carousel());
}

function dropDownButton() {
  const button = createButton("Drop Down");
  const dropDownElement = createDropDown();
  button.addEventListener("click", function (event) {
    dropDownEvent(event, dropDownElement);
  });
  return button;
}

function carousel() {
  const carousel = createCarousel();

  return carousel;
}
