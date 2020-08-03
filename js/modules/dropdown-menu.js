export default function initDropdownMenu() {}

const dropdownMenus = document.querySelectorAll("[data-dropdown]");

function outsideClick(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      html.removeEventListener("click", handleOutsideClick);
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    html.addEventListener("click", handleOutsideClick);
    element.setAttribute(outside, "");
  }
}

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("ativo");
  outsideClick(this, () => {
    this.classList.remove("ativo");
  });
}

dropdownMenus.forEach((menu) => {
  // adicionando vários eventos
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});
