/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/accordion-anime.js":
/*!***************************************!*\
  !*** ./js/modules/accordion-anime.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFaqDetails; });\nfunction initFaqDetails() {\n  const accodionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n  accodionList[0].classList.add(\"ativo\");\n  accodionList[0].nextElementSibling.classList.add(\"ativo\");\n\n  function activeAccordion() {\n    this.classList.toggle(\"ativo\");\n    this.nextElementSibling.classList.toggle(\"ativo\");\n  }\n\n  accodionList.forEach((item) => {\n    item.addEventListener(\"click\", activeAccordion);\n  });\n}\n\n\n//# sourceURL=webpack:///./js/modules/accordion-anime.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initAnimaNumeros; });\nfunction initAnimaNumeros() {}\r\n\r\nfunction iniciaAnimacao() {\r\n  const numeros = document.querySelectorAll(\"[data-numero]\");\r\n\r\n  numeros.forEach((numero) => {\r\n    const total = +numero.innerText;\r\n    const incremento = Math.floor(total / 100);\r\n\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      start += incremento;\r\n      numero.innerText = start;\r\n      if (start > total) {\r\n        numero.innerText = total;\r\n        clearInterval(timer);\r\n      }\r\n    }, 25 * Math.random());\r\n  });\r\n}\r\n\r\nlet observer;\r\nfunction handleMutation(mutation) {\r\n  if (mutation[0].target.classList.contains(\"ativo\")) {\r\n    iniciaAnimacao();\r\n    observer.disconnect();\r\n  }\r\n}\r\n\r\nobserver = new MutationObserver(handleMutation);\r\nconst obsrverTarget = document.querySelector(\".numeros\");\r\n\r\nobserver.observe(obsrverTarget, { attributes: true });\r\n\n\n//# sourceURL=webpack:///./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initDropdownMenu; });\nfunction initDropdownMenu() {}\r\n\r\nconst dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\nfunction outsideClick(element, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      html.removeEventListener(\"click\", handleOutsideClick);\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    html.addEventListener(\"click\", handleOutsideClick);\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\r\nfunction handleClick(event) {\r\n  event.preventDefault();\r\n  this.classList.toggle(\"ativo\");\r\n  outsideClick(this, () => {\r\n    this.classList.remove(\"ativo\");\r\n  });\r\n}\r\n\r\ndropdownMenus.forEach((menu) => {\r\n  // adicionando vários eventos\r\n  [\"touchstart\", \"click\"].forEach((userEvent) => {\r\n    menu.addEventListener(userEvent, handleClick);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack:///./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetchAnimais.js":
/*!************************************!*\
  !*** ./js/modules/fetchAnimais.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFetchAnimais; });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n  function createAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n\r\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\r\n    return div;\r\n  }\r\n\r\n  async function fetchAnimais(url) {\r\n    const animaisResponse = await fetch(url);\r\n    const animaisJson = await animaisResponse.json();\r\n\r\n    const numerosGrid = document.querySelector(\".numeros-grid\");\r\n\r\n    animaisJson.forEach((animal) => {\r\n      const divAnimal = createAnimal(animal);\r\n      numerosGrid.appendChild(divAnimal);\r\n    });\r\n    Object(_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  }\r\n\r\n  fetchAnimais(\"./animaisapi.json\");\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/fetchAnimais.js?");

/***/ }),

/***/ "./js/modules/fetchBitcoin.js":
/*!************************************!*\
  !*** ./js/modules/fetchBitcoin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFetchBitcoin; });\nfunction initFetchBitcoin() {\r\n  fetch(\"https://blockchain.info/ticker\")\r\n    .then((response) => response.json())\r\n    .then((json) => {\r\n      const btcPreco = document.querySelector(\".btc-preco\");\r\n      btcPreco.innerText = (100 / json.BRL.sell).toFixed(4);\r\n    })\r\n    .catch((error) => {\r\n      console.log(Error(error));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/fetchBitcoin.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initMenuMobile; });\nfunction initMenuMobile() {\r\n    \r\n}\n\n//# sourceURL=webpack:///./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initModal; });\nfunction initModal() {\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  function fecharModal(event) {\r\n    event.preventDefault();\r\n    containerModal.classList.toggle(\"ativo\");\r\n  }\r\n\r\n  function clickForaModal(event) {\r\n    if (event.target === this) {\r\n      fecharModal(event);\r\n    }\r\n  }\r\n\r\n  botaoFechar.addEventListener(\"click\", fecharModal);\r\n\r\n  botaoAbrir.addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n    containerModal.classList.toggle(\"ativo\");\r\n  });\r\n\r\n  containerModal.addEventListener(\"click\", clickForaModal);\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initAnimacaoScroll; });\nfunction initAnimacaoScroll() {\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  const windowMetade = window.innerHeight * 0.6;\r\n\r\n  function animaScroll() {\r\n    sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top - windowMetade;\r\n      if (sectionTop < 0) {\r\n        section.classList.add(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  if (sections.length) {\r\n    animaScroll();\r\n\r\n    window.addEventListener(\"scroll\", animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initScrollSuave; });\nfunction initScrollSuave() {\r\n  const linksInternos = document.querySelectorAll(\r\n    '[data-menu=\"suave\"] a[href^=\"#\"]'\r\n  );\r\n\r\n  function scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    console.log(section);\r\n\r\n    section.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n\r\n    /* Maneira alternativa\r\n        window.scrollTo({\r\n            top: section.offsetTop,\r\n            behavior: 'smooth'\r\n        }) */\r\n  }\r\n\r\n  if (linksInternos) {\r\n    linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", scrollToSection);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initTabNav; });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n\r\n  function activeTab(index) {\r\n    tabContent.forEach((item) => {\r\n      item.classList.remove(\"ativo\");\r\n    });\r\n    const direcao = tabContent[index].dataset.anime;\r\n    tabContent[index].classList.add(\"ativo\", direcao);\r\n  }\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add(\"ativo\", \"show-right\");\r\n\r\n    tabMenu.forEach((item, index) => {\r\n      item.addEventListener(\"click\", () => {\r\n        activeTab(index);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tooltip; });\nfunction tooltip() {}\r\n\r\nconst tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\nconst onMouseMove = {\r\n  tooltipBox: \"\",\r\n  handleEvent(event) {\r\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n    this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n  },\r\n};\r\n\r\nconst onMouseLeave = {\r\n  tooltipBox: \"\",\r\n  element: \"\",\r\n  handleEvent() {\r\n    this.tooltipBox.remove();\r\n    this.element.removeEventListener(\"mouseleave\", this);\r\n    this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n  },\r\n};\r\n\r\nfunction criarTooltipBox(element) {\r\n  const tooltipBox = document.createElement(\"div\");\r\n  const text = element.getAttribute(\"aria-label\");\r\n  tooltipBox.classList.add(\"tooltip\");\r\n  tooltipBox.innerText = text;\r\n  document.body.appendChild(tooltipBox);\r\n  return tooltipBox;\r\n}\r\n\r\nfunction onMouseOver(event) {\r\n  const tooltipBox = criarTooltipBox(this);\r\n  tooltipBox.style.top = `${event.pageY}px`;\r\n  tooltipBox.style.left = `${event.pageX}px`;\r\n\r\n  onMouseMove.tooltipBox = tooltipBox;\r\n  this.addEventListener(\"mousemove\", onMouseMove);\r\n\r\n  onMouseLeave.tooltipBox = tooltipBox;\r\n  onMouseLeave.element = this;\r\n  this.addEventListener(\"mouseleave\", onMouseLeave);\r\n}\r\n\r\ntooltips.forEach((item) => {\r\n  item.addEventListener(\"mouseover\", onMouseOver);\r\n});\r\n\n\n//# sourceURL=webpack:///./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_accordion_anime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion-anime.js */ \"./js/modules/accordion-anime.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./js/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchBitcoin.js */ \"./js/modules/fetchBitcoin.js\");\n/*\r\nconst animais = document.getElementById('animais')\r\n\r\nconsole.log(animais)\r\n\r\nconst ul = document.getElementsByClassName('grid-section')\r\n\r\nconsole.log(ul)\r\n\r\nconst primeiroLi = document.querySelector('li')\r\n\r\nconsole.log(primeiroLi)\r\n\r\nconst linkInterno = document.querySelector('[href^=\"#\"]')\r\n\r\nconsole.log(linkInterno)\r\n\r\n\r\nconst imgAnimais = document.querySelectorAll('.animais img')\r\n\r\nconsole.log(imgAnimais)\r\n\r\n\r\n// retornar todas imagens do site\r\nconst imagens = document.querySelectorAll('img')\r\nconsole.log(imagens)\r\n\r\n//retornar imgs que começam com imagens\r\nconst imagens2 = document.querySelectorAll('img[src^=\"img/imagem\"] ')\r\nconsole.log(imagens2)\r\n\r\n// retornar links internos\r\nconst links = document.querySelector('[href^=\"#\"]')\r\nconsole.log(links)\r\n\r\n// retornar primeiro H2\r\nconst primeiroH2 = document.querySelector('.animais-descricao h2')\r\nconsole.log(primeiroH2)\r\n\r\n// retornar ultimo P\r\nconst ultimoP = document.querySelectorAll('p') \r\nconsole.log( ultimoP[ultimoP.length - 1])\r\n\r\n\r\n\r\n\r\nconst menu = document.querySelector('.menu')\r\n\r\n\r\n// adiciona classe em elemento\r\nmenu.classList.add('ativo')\r\n\r\nmenu.className += ' azul';\r\n\r\nconsole.log(menu.className)\r\n\r\n\r\n\r\n// \"encapsula\" o elemento em um quadrado e mostra valores de dimenções\r\nconst primeiroh2 = document.querySelector('h2')\r\nconst rect = primeiroh2.getBoundingClientRect()\r\n\r\nconsole.log(rect)\r\n\r\n// trabalhando com Window\r\n\r\nconsole.log(\r\n    window.innerWidth,\r\n    window.outerWidth,\r\n    window.innerHeight,\r\n    window.outerHeight\r\n)\r\n\r\n// utilizando o Window para @mediaQueries\r\n\r\nconst small = window.matchMedia('(max-width: 600px)')\r\n\r\nif(small.matches){\r\n    console.log(\"Usuário mobile\")\r\n}\r\n\r\n\r\n\r\n// Exercicio\r\n\r\n// 1- Verificar a distancia da primeira img para o topo\r\nconst img = document.querySelector('img')\r\n// errado const rect = img.getBoundingClientRect()\r\nconst imgTop = img.offsetTop\r\n\r\nconsole.log('Imagem top: ', imgTop);\r\n\r\n// 2 - Retornar a soma da largura de todas as imagens\r\nfunction somaImagens(){\r\n    const tamanhoImgs = document.querySelectorAll('img')\r\n    let tamanho = 0;\r\n    tamanhoImgs.forEach((item) => {\r\n        tamanho += item.offsetWidth\r\n    })\r\n    console.log(tamanho)\r\n}\r\n\r\nwindow.onload = function() {\r\n    somaImagens()\r\n}\r\n\r\n\r\n// 3 - Verificar tamanho de links - certo\r\nconst links = document.querySelectorAll('a')\r\nlinks.forEach((item) =>{\r\n    if(item.offsetWidth >= 48 && item.offsetHeight >= 48){\r\n        console.log(\"link ok\")\r\n    } else {\r\n        console.log(\"links sem acessibilidade\")\r\n    }\r\n})\r\n\r\n\r\n// 4 - adicionar class casoa tela for menor que 720px\r\nconst small = window.matchMedia('(max-width: 720px)')\r\n\r\nif(small.matches){\r\n    const menu = document.querySelector('.menu')\r\n    menu.classList.add('menu-mobile')\r\n}\r\n\r\n\r\n*/\r\n\r\n// Eventos\r\n\r\n/*\r\nconst img = document.querySelector('img')\r\n\r\n//img.addEventListener('click', callbackClick)\r\n\r\nfunction callbackClick(){\r\n    console.log('Clicou')\r\n}\r\n\r\n//const animaisLista = document.querySelector('.animais-lista')\r\n\r\nfunction callbackLista(event){\r\n    console.log(event.target);\r\n    console.log(event.type)\r\n    console.log(event.currentTarget)\r\n    console.log(event.path)\r\n}\r\n\r\nanimaisLista.addEventListener('click', callbackLista)\r\n\r\n\r\n*/\r\n\r\n/**\r\n * Outros tipos de Evento: click, scroll, resize, keydown, keyup, mouseenter\r\n * Eventos podem ser acionados por Window e Document\r\n */\r\n\r\n// Exercicio\r\n\r\n/* 1\r\n\r\nconst linkInternos = document.querySelectorAll('[href^=\"#\"]')\r\n\r\nlinkInternos.forEach((link)=>{\r\n    link.addEventListener('click', callbackClickLink)\r\n})\r\n\r\nfunction callbackClickLink(event){\r\n    event.preventDefault();\r\n    linkInternos.forEach((item) => {\r\n        item.classList.remove('ativo')\r\n    })\r\n    event.currentTargetclassList.add('ativo')\r\n}\r\n\r\n// 2\r\n\r\nconst body = document.querySelectorAll('body *')\r\nbody.forEach((item) =>{\r\n    item.addEventListener('click', callbackClickBody)\r\n})\r\n\r\n\r\nfunction callbackClickBody(event){\r\n    console.log(event.currentTarget)\r\n}\r\n\r\nfunction callbackClickBodyRemove(event) {\r\n    event.currentTarget.remove()\r\n}\r\n\r\nfunction handleClickT(event){\r\n    if(event.key === 't'){\r\n        console.log('Clicou T')\r\n        document.documentElement.classList.toggle('textomaior')\r\n    }\r\n}\r\n\r\nwindow.addEventListener('keydown', handleClickT)\r\n\r\n*/\r\n\r\n/**\r\n*  innerHTML - todos elementos e tag selecionada\r\n*  outerHTML - pega elementos de fora\r\n*  innerText - apenas texto\r\n* \r\n* Transversing - navegar por elementos\r\n* Element - é uma tag html\r\n* Node - pode ser qualquer tipo de elemento ou dado\r\n* \r\n*/\r\n\r\n/*\r\nconst lista = document.querySelector('.animais-lista')\r\n\r\nconsole.log(lista.parentElement.parentElement)\r\n\r\nconsole.log(lista.previousElementSibling)\r\n\r\nconst contato = document.querySelector('.contato')\r\n \r\nconst contatoTitulo = contato.querySelector('.titulo')\r\nconst mapa = document.querySelector('.mapa')\r\n\r\n//contato.replaceChild(contatoTitulo, mapa)\r\n\r\nconst novoH1 = document.createElement('h1')\r\nnovoH1.innerText = 'Novo Titulo'\r\nnovoH1.classList.add('titulo')\r\n\r\nmapa.appendChild(novoH1)\r\n\r\n// Duplicar elementos\r\n\r\nconst h1 = document.querySelector('h1')\r\nconst faq = document.querySelector('.faq')\r\n\r\nconst cloneh1 = h1.cloneNode(true)\r\n\r\nfaq.appendChild(cloneh1)\r\n\r\n*/\r\n\r\n/**\r\n* Navegação por TABs \r\n* \r\n*/\r\n\r\n\r\n\r\n/**\r\n* Accordion List\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nObject(_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nObject(_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nObject(_modules_accordion_anime_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\nObject(_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\nObject(_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\nObject(_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\nObject(_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\nObject(_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\nObject(_modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./js/script.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./js/script.js */\"./js/script.js\");\n\n\n//# sourceURL=webpack:///multi_./js/script.js?");

/***/ })

/******/ });