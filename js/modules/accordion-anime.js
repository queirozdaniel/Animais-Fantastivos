export default class Accordion {
  constructor(list) {
    this.accodionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accodionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accodionList.length) {
      this.toggleAccordion(this.accodionList[0]);
      this.addAccordionEvent();
    }
  }
}
