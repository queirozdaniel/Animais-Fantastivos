export default function initFaqDetails(){
    const accodionList = document.querySelectorAll('[data-anime="accordion"] dt')
    accodionList[0].classList.add('ativo')
    accodionList[0].nextElementSibling.classList.add('ativo')

    function activeAccordion(){
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    accodionList.forEach((item)=>{
        item.addEventListener('click', activeAccordion)
    })
}


