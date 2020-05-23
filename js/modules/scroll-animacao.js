export default function initAnimacaoScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    const windowMetade = window.innerHeight * 0.6
    
    if(sections.length){    
        function animaScroll(){
            sections.forEach((section)=>{
                const sectionTop = section.getBoundingClientRect().top - windowMetade 
                if(sectionTop < 0){
                    section.classList.add('ativo')
                }
        
            })
        }
        
        animaScroll()
        
        window.addEventListener('scroll', animaScroll)
    }
}

