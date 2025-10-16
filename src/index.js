import "./style.css";
import {
  createButton,
  createCarousel,
  createDropDown,
  createLayout,
} from "./dom";
import { carouselEvent, dropDownEvent } from "./event";
import Pudding from "./img/1.png";
import Burger from "./img/2.png";
import Peach from "./img/3.png";

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
  const myImg = [Pudding, Burger, Peach];

  const carousel = createCarousel(myImg[0]);
  const carouselBtn = carousel.querySelectorAll("button");
  carouselBtn.forEach((element) => {
    element.addEventListener("click", function (event) {
      carouselEvent(event, myImg);
    });
  });
  return carousel;
}
