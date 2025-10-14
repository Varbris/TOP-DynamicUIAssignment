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

  return { el, addAttribute, addChild, addInner, addClassList };
}

export { createElement };
