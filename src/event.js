import { createDropDown } from "./dom";

function dropDownEvent(event, dropDownElement) {
  if (
    dropDownElement.querySelector(".drop-down").classList.contains("hidden")
  ) {
    event.target.parentNode.appendChild(dropDownElement);
    dropDownElement.querySelector(".drop-down").classList.remove("hidden");
  } else {
    dropDownElement.querySelector(".drop-down").classList.add("hidden");
    event.target.parentNode.removeChild(dropDownElement);
  }
}

function carouselEvent() {
  let currentData = document.querySelector(".carousel-img-container")
    .childNodes[0].dataset.id;
  currentData = parseInt(currentData);
  const previousBtn = function (event, myData) {
    if (currentData === 0 && event.target.id === "previousBtn") {
      currentData = currentData + myData.length;
    }
    if (
      event.target.id === "previousBtn" &&
      currentData !== 0 &&
      currentData >= 0
    ) {
      currentData--;
      const myCarousel = document.querySelector(".carousel-container");
      const getImage = myCarousel
        .querySelector(".carousel-img-container")
        .querySelector("img");
      getImage.src = myData[currentData];
      getImage.dataset.id = currentData;
      removeIndicatorHighlight();
      addIndicatorHighlight(currentData);
    }
  };

  const nextBtn = function (event, myData) {
    if (
      parseInt(currentData) === myData.length - 1 &&
      event.target.id === "nextBtn"
    ) {
      currentData = myData.length - myData.length - 1;
    }
    if (currentData < myData.length - 1 && event.target.id === "nextBtn") {
      currentData++;
      const myCarousel = document.querySelector(".carousel-container");
      const getImage = myCarousel
        .querySelector(".carousel-img-container")
        .querySelector("img");
      getImage.src = myData[currentData];
      getImage.dataset.id = currentData;
      removeIndicatorHighlight();
      addIndicatorHighlight(currentData);
    }
  };
  const indicatorBtn = function (event, myData) {
    if (event.target.id === "carouselIndicatorBtn") {
      const myCarousel = document.querySelector(".carousel-container");
      const getImage = myCarousel
        .querySelector(".carousel-img-container")
        .querySelector("img");
      getImage.src = myData[event.target.dataset.id];
      getImage.dataset.id = event.target.dataset.id;
      removeIndicatorHighlight();
      addIndicatorHighlight(event.target.dataset.id);
    }
  };

  const removeIndicatorHighlight = function () {
    const myCarousel = document.querySelector(".carousel-container");
    const indicatorBtn = myCarousel.querySelectorAll(".carousel-indicator");
    indicatorBtn.forEach(function (item) {
      item.classList.remove("indicator-active");
    });
  };
  const addIndicatorHighlight = function (currentData) {
    const myCarousel = document.querySelector(".carousel-container");
    myCarousel
      .querySelectorAll(".carousel-indicator")
      .item(currentData)
      .classList.add("indicator-active");
  };

  return { previousBtn, nextBtn, indicatorBtn };
}

export { dropDownEvent, carouselEvent };
