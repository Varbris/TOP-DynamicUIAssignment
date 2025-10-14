import { createElement } from "./create.js";

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

export { createButton, createLayout, createDropDown };
