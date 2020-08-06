import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";

    if (eventos === undefined) this.eventos = ["click", "touchstart"];
    else this.eventos = eventos;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
