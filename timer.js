import Countdown from './js/modules/countdown.js'

const diasParaONatal = new Countdown('24 December 2020 23:59:59')

function criaSpan(info, text) {
    const span = document.createElement('span');
    span.classList.add('relogio__item');
    span.classList.add(text)
    span.innerText = `${info}`
    return span;
}

function populaHTML() {
    const divTimer = document.querySelector('.relogio')
    const { days, hours, minutes, seconds } = diasParaONatal.total

    divTimer.appendChild(criaSpan(days, 'days'))
    divTimer.appendChild(criaSpan(hours, 'hours'))
    divTimer.appendChild(criaSpan(minutes, 'minutes'))
    divTimer.appendChild(criaSpan(seconds, 'seconds'))
}

populaHTML(diasParaONatal);

function atualiza(newData, className) {
    const item = document.querySelector(`.${className}`);
    item.innerText = newData
}

setInterval(() => {
    const { days, hours, minutes, seconds } = diasParaONatal.total

    atualiza(days, 'days')
    atualiza(hours, 'hours')
    atualiza(minutes, 'minutes')
    atualiza(seconds, 'seconds')

}, 1000)




