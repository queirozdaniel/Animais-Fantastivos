export default function initDropdownMenu() {
    
}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach((menu) => {
    // adicionando vários eventos
    ['touchstart', 'click'].forEach( userEvent => {
        menu.addEventListener(userEvent, handleClick);
    });
});

function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('ativo');
    outsideClick(this, () => {
        this.classList.remove('ativo');
    });
}

function outsideClick(element, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
        html.addEventListener('click', handleOutsideClick);
        element.setAttribute(outside, '');
    }
    
    function handleOutsideClick(event) {
        if(!element.contains(event.target)){
            element.removeAttribute(outside);
            html.removeEventListener('click', handleOutsideClick);
            callback();
        }   
    }
}