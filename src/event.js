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

export { dropDownEvent };
