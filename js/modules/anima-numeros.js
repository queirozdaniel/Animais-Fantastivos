export default function initAnimaNumeros() {}

function iniciaAnimacao() {
  const numeros = document.querySelectorAll("[data-numero]");

  numeros.forEach((numero) => {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
}

let observer;
function handleMutation(mutation) {
  if (mutation[0].target.classList.contains("ativo")) {
    iniciaAnimacao();
    observer.disconnect();
  }
}

observer = new MutationObserver(handleMutation);
const obsrverTarget = document.querySelector(".numeros");

observer.observe(obsrverTarget, { attributes: true });
