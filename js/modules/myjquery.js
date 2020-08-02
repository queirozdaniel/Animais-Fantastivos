function $$(selectedElement) {

    const elements = document.querySelectorAll(selectedElement)

    function hidden() {
        elements.forEach((element) => {
            element.style.display = 'none';
        })
        return this
    }

    function show() {
        elements.forEach((element) => {
            element.style.display = 'initial';
        })
        return this
    }

    function on(onEvent, callback) {
        elements.forEach(element => {
            element.addEventListener(onEvent, callback)
        })
        return this
    }

    function addClass(className) {
        elements.forEach(element => {
            element.classList.add(className)
        })
        return this
    }

    function removeClass(className) {
        elements.forEach(element => {
            element.classList.remove(className)
        })
        return this
    }

    return {
        elements,
        hidden,
        show,
        on,
        addClass,
        removeClass
    }
}

const button = $$('button')

button.hidden().show().on('click', (event) => {
    console.log("Oi", event.target);
    button.addClass('ativo')
})

/*

Regex para
CEP: /\d{5}[-\s]?\d{3}/g
CPF: /(?:\d{3}[.-]?){3}\d{2}/g
CPNJ: /\d{2}[.-]?(?:\d{3}[.-]?){2}[/]?\d{4}[.-]?\d{2}/g
Telefones: /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}/g
email: /[\w.-]+@[\w-]+\.[\w.-]+/gi



 */