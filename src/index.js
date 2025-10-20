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
  const h1 = document.createElement("h1");
  const artSource = document.createElement("a");
  artSource.href = "https://www.pixiv.net/en/users/1096811";
  artSource.innerText = "チャイ";
  h1.innerText = "Art Source By: ";
  h1.appendChild(artSource);
  const layout = createLayout();
  body.appendChild(layout);
  body.querySelector("nav").appendChild(dropDownButton());
  body.querySelector("article").appendChild(carousel());
  body.querySelector("article").appendChild(h1);
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

  const carousel = createCarousel(myImg);
  const carouselBtn = carousel.querySelectorAll("button");
  const currentData = carousel.querySelector(".active").dataset.id;
  carousel
    .querySelectorAll("#carouselIndicatorBtn")
    .item(currentData)
    .classList.add("indicator-active");

  carouselBtn.forEach((element) => {
    element.addEventListener("click", function (event) {
      carouselEvent(event, myImg);
    });
  });
  return carousel;
}
