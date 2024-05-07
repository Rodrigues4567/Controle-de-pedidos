
const button = document.querySelector('.button');
let respostaTitulo = document.querySelector('.resposta-titulo');
let respostaDesc = document.querySelector('.resposta-desc');

let radioPizza = document.querySelector('#radio-pizza');
let radioBebida = document.querySelector('#radio-bebida');
let selectPizza = document.querySelector('#select-pizza');
let selectBebida = document.querySelector('#select-bebida');
let detalhesTxt = document.querySelector('#detalhestxt');

radioBebida.addEventListener('click', mostraSelectBebida = () => {
    selectBebida.classList.remove('hide');
    selectPizza.classList.add('hide');
})

radioPizza.addEventListener('click', mostraSelectPizza = () => {
    selectBebida.classList.add('hide');
    selectPizza.classList.remove('hide');
})