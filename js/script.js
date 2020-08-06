/*
const animais = document.getElementById('animais')

console.log(animais)

const ul = document.getElementsByClassName('grid-section')

console.log(ul)

const primeiroLi = document.querySelector('li')

console.log(primeiroLi)

const linkInterno = document.querySelector('[href^="#"]')

console.log(linkInterno)


const imgAnimais = document.querySelectorAll('.animais img')

console.log(imgAnimais)


// retornar todas imagens do site
const imagens = document.querySelectorAll('img')
console.log(imagens)

//retornar imgs que começam com imagens
const imagens2 = document.querySelectorAll('img[src^="img/imagem"] ')
console.log(imagens2)

// retornar links internos
const links = document.querySelector('[href^="#"]')
console.log(links)

// retornar primeiro H2
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)

// retornar ultimo P
const ultimoP = document.querySelectorAll('p') 
console.log( ultimoP[ultimoP.length - 1])




const menu = document.querySelector('.menu')


// adiciona classe em elemento
menu.classList.add('ativo')

menu.className += ' azul';

console.log(menu.className)



// "encapsula" o elemento em um quadrado e mostra valores de dimenções
const primeiroh2 = document.querySelector('h2')
const rect = primeiroh2.getBoundingClientRect()

console.log(rect)

// trabalhando com Window

console.log(
    window.innerWidth,
    window.outerWidth,
    window.innerHeight,
    window.outerHeight
)

// utilizando o Window para @mediaQueries

const small = window.matchMedia('(max-width: 600px)')

if(small.matches){
    console.log("Usuário mobile")
}



// Exercicio

// 1- Verificar a distancia da primeira img para o topo
const img = document.querySelector('img')
// errado const rect = img.getBoundingClientRect()
const imgTop = img.offsetTop

console.log('Imagem top: ', imgTop);

// 2 - Retornar a soma da largura de todas as imagens
function somaImagens(){
    const tamanhoImgs = document.querySelectorAll('img')
    let tamanho = 0;
    tamanhoImgs.forEach((item) => {
        tamanho += item.offsetWidth
    })
    console.log(tamanho)
}

window.onload = function() {
    somaImagens()
}


// 3 - Verificar tamanho de links - certo
const links = document.querySelectorAll('a')
links.forEach((item) =>{
    if(item.offsetWidth >= 48 && item.offsetHeight >= 48){
        console.log("link ok")
    } else {
        console.log("links sem acessibilidade")
    }
})


// 4 - adicionar class casoa tela for menor que 720px
const small = window.matchMedia('(max-width: 720px)')

if(small.matches){
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}


*/

// Eventos

/*
const img = document.querySelector('img')

//img.addEventListener('click', callbackClick)

function callbackClick(){
    console.log('Clicou')
}

//const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event){
    console.log(event.target);
    console.log(event.type)
    console.log(event.currentTarget)
    console.log(event.path)
}

animaisLista.addEventListener('click', callbackLista)


*/

/**
 * Outros tipos de Evento: click, scroll, resize, keydown, keyup, mouseenter
 * Eventos podem ser acionados por Window e Document
 */

// Exercicio

/* 1

const linkInternos = document.querySelectorAll('[href^="#"]')

linkInternos.forEach((link)=>{
    link.addEventListener('click', callbackClickLink)
})

function callbackClickLink(event){
    event.preventDefault();
    linkInternos.forEach((item) => {
        item.classList.remove('ativo')
    })
    event.currentTargetclassList.add('ativo')
}

// 2

const body = document.querySelectorAll('body *')
body.forEach((item) =>{
    item.addEventListener('click', callbackClickBody)
})


function callbackClickBody(event){
    console.log(event.currentTarget)
}

function callbackClickBodyRemove(event) {
    event.currentTarget.remove()
}

function handleClickT(event){
    if(event.key === 't'){
        console.log('Clicou T')
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', handleClickT)

*/

/**
 *  innerHTML - todos elementos e tag selecionada
 *  outerHTML - pega elementos de fora
 *  innerText - apenas texto
 *
 * Transversing - navegar por elementos
 * Element - é uma tag html
 * Node - pode ser qualquer tipo de elemento ou dado
 *
 */

/*
const lista = document.querySelector('.animais-lista')

console.log(lista.parentElement.parentElement)

console.log(lista.previousElementSibling)

const contato = document.querySelector('.contato')
 
const contatoTitulo = contato.querySelector('.titulo')
const mapa = document.querySelector('.mapa')

//contato.replaceChild(contatoTitulo, mapa)

const novoH1 = document.createElement('h1')
novoH1.innerText = 'Novo Titulo'
novoH1.classList.add('titulo')

mapa.appendChild(novoH1)

// Duplicar elementos

const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneh1 = h1.cloneNode(true)

faq.appendChild(cloneh1)

*/

/**
 * Navegação por TABs
 *
 */

/**
 * Accordion List
 */

import ScrollSuave from "./modules/scroll-suave.js";
import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/accordion-anime.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import ScrollAnima from "./modules/scroll-animacao.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
new Accordion('[data-anime="accordion"] dt').init();
new TabNav('[data-tab="menu"] li', '[data-tab="content"] section').init();
new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
).init();
new Tooltip("[data-tooltip]").init();
new ScrollAnima('[data-anime="scroll"]').init();
new DropdownMenu("[data-dropdown]").init();
new MenuMobile('[data-menu="button"]', '[data-menu="list"]').init();
fetchAnimais("./animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
