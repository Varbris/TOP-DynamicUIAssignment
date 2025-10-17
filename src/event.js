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

function carouselEvent(event, myData) {
  const currentData = document.querySelector(".carousel-img-container")
    .childNodes[0].dataset.id;

  previousBtn(event, myData, parseInt(currentData));
  nextBtn(event, myData, parseInt(currentData));
}

function nextBtn(event, myData, currentData) {
  if (currentData < myData.length - 1 && event.target.id === "nextBtn") {
    console.log("awikwok");
    const myCarousel = document.querySelector(".carousel-container");
    const getImage = myCarousel
      .querySelector(".carousel-img-container")
      .querySelector("img");
    getImage.src = myData[currentData + 1];
    getImage.dataset.id = currentData + 1;
    console.log(currentData + 1);
    currentData++;
  }
}

function previousBtn(event, myData, currentData) {
  if (
    event.target.id === "previousBtn" &&
    currentData !== 0 &&
    currentData >= 0
  ) {
    console.log("awikwok2");
    currentData--;
    const myCarousel = document.querySelector(".carousel-container");
    const getImage = myCarousel
      .querySelector(".carousel-img-container")
      .querySelector("img");
    getImage.src = myData[currentData];
    getImage.dataset.id = currentData;
    console.log(currentData - 1);
  }
}

export { dropDownEvent, carouselEvent };
