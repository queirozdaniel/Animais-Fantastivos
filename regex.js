/*
const regexp = /\w/gi;

const nome = 'Daniel Queiroz'

console.log(nome.replace(regexp, "x"));

const frase = 'Javascript e Java'
const rgteste = /Java/g;

console.log(rgteste.exec(frase));


const resultados = frase.match(rgteste)
console.log(resultados);


const fraseNum = '423Javascr234ipt, Java32 e Vue.js232'
const regexNum = /\d/g
const resultadosNum = fraseNum.replace(regexNum, '')

console.log(resultadosNum);

const cpfs = document.querySelectorAll('.cpf li')

function elementsInnerText([...elements]) {
    return elements.map(el => {
        return el.innerText
    })
}

const limparCPF = (cpf) => {
    return cpf.replace(/\D/g, '');
}

const construirCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formataCpfs = (cpfs) => {
    return cpfs.map(limparCPF).map(construirCPF)
}

const subistituiCPFS = (cpfsElements) => {
    const cpfs = elementsInnerText(cpfsElements)
    const cpfsFormatados = formataCpfs(cpfs)

    cpfsElements.forEach((element, index) => {
        element.innerText = cpfsFormatados[index];
    })

    console.log(cpfsFormatados);
}

console.log(limparCPF("123.123.123-35"));
console.log(construirCPF("12312312335"));


subistituiCPFS(cpfs)
*/

import ValidarCpf from './validar-cpf.js'

const campoCPF = document.getElementById('cpf')
const validador = new ValidarCpf(campoCPF).iniciar();

