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

