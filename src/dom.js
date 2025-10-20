import { createElement } from "./create.js";

import Previous from "./img/previous.png";
import Next from "./img/next.png";

function createButton(name) {
  const button = createElement("button");
  const buttonId = String(name).charAt(0).toLowerCase() + String(name).slice(1);
  const buttonClass = name.toLowerCase().replaceAll(" ", "-") + "-btn";
  button.addAttribute("id", buttonId.replaceAll(" ", "") + "Btn");
  button.addAttribute("class", buttonClass);
  button.addInner(name);

  return button.el;
}

function createLayout() {
  const header = createElement("header");
  const nav = createElement("nav");
  const main = createElement("main");
  const article = createElement("article");
  const footer = createElement("footer");
  const elementList = document.createDocumentFragment();

  main.addAttribute("id", "main");
  article.addAttribute("id", "article");

  header.addChild(nav.el);
  main.addChild(article.el);

  elementList.appendChild(header.el);
  elementList.appendChild(main.el);
  elementList.appendChild(footer.el);
  return elementList;
}

function createDropDown() {
  const div = createElement("div");
  const ul = createElement("ul");
  let dropDownItemList = ["menu 1", "menu 2", "menu 3"];
  dropDownItemList = dropDownItemList.forEach(function (item) {
    const li = createElement("li");
    li.addInner(item);
    ul.addChild(li.el);
  });
  div.addClassList("drop-down-container");
  ul.addClassList("drop-down");
  ul.addClassList("hidden");

  div.addChild(ul.el);
  return div.el;
}

function createCarousel(imageData) {
  const carouselContainer = createElement("div");
  carouselContainer.addClassList("carousel-container");
  const carouselImgContainer = createElement("div");
  carouselImgContainer.addClassList("carousel-img-container");
  const carouselIndicatorContainer = createElement("div");
  carouselIndicatorContainer.addClassList("carousel-indicator-container");

  const img = new Image();
  img.src = imageData[0];
  img.classList.add("active");
  img.setAttribute("data-id", "0");

  carouselImgContainer.addChild(img);
  const currentDisplayData =
    carouselImgContainer.el.querySelector(".active").dataset.id;

  carouselContainer.addChild(carouselImgContainer.el);
  carouselContainer.addChild(createCarouselBtn("previous", Previous));
  carouselContainer.addChild(createCarouselBtn("next", Next));
  imageData.forEach(function (item, index) {
    const carouselIndicator = createCarouselIndicators();
    carouselIndicator.setAttribute("data-id", index);
    carouselIndicatorContainer.addChild(carouselIndicator);
  });
  carouselImgContainer.addChild(carouselIndicatorContainer.el);
  return carouselContainer.el;
}

function createCarouselIndicators() {
  const button = createElement("button");
  button.addClassList("carousel-indicator");
  button.addAttribute("id", "carouselIndicatorBtn");
  return button.el;
}

function createCarouselBtn(classname, img) {
  const button = createElement("button");
  const btnImg = createElement("img");
  btnImg.addAttribute("src", img);
  button.addClassList("carousel-btn");
  button.addClassList(classname);
  button.addAttribute("id", classname + "Btn");
  button.addChild(btnImg.el);
  return button.el;
}

export { createButton, createLayout, createDropDown, createCarousel };
