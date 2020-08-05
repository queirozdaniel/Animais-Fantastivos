import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const eventos = ["click", "touchstart"];

  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu(event) {
    menuButton.classList.add("active");
    menuList.classList.add("active");
    outsideClick(menuList, eventos, () => {
      menuButton.classList.remove("active");
      menuList.classList.remove("active");
    });
  }

  eventos.forEach((event) => {
    menuButton.addEventListener(event, openMenu);
  });
  menuButton.addEventListener("click", openMenu);
}
