export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    console.log(section);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /* Maneira alternativa
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        }) */
  }

  if (linksInternos) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
