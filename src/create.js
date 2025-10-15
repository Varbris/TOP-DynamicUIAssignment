function createElement(tag) {
  const el = document.createElement(tag);

  const addAttribute = function (attribute, value) {
    el.setAttribute(attribute, value);
  };

  const addChild = function (dom) {
    el.appendChild(dom);
  };

  const addInner = function (value) {
    el.innerText = value;
  };

  const addClassList = function (value) {
    el.classList.add(value);
  };

  const addInnerHtml = function (value) {
    el.innerHTML = value;
  };

  return { el, addAttribute, addChild, addInner, addClassList, addInnerHtml };
}

export { createElement };
