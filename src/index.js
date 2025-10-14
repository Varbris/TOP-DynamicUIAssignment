import "./style.css";
import { createButton, createDropDown, createLayout } from "./dom";
import { dropDownEvent } from "./event";

document.addEventListener("DOMContentLoaded", main);

function main(event) {
  const body = document.getElementById("body");
  const layout = createLayout();
  body.appendChild(layout);
  body.querySelector("nav").appendChild(dropDownButton());
}

function dropDownButton() {
  const button = createButton("Drop Down");
  const dropDownElement = createDropDown();
  button.addEventListener("click", function (event) {
    dropDownEvent(event, dropDownElement);
  });
  return button;
}
