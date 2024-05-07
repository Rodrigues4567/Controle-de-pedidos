
const button = document.querySelector('.button');
let respostaTitulo = document.querySelector('.resposta-titulo');
let respostaDesc = document.querySelector('.resposta-desc');

let radioPizza = document.querySelector('#radio-pizza');
let radioBebida = document.querySelector('#radio-bebida');
let selectPizza = document.querySelector('#select-pizza');
let selectBebida = document.querySelector('#select-bebida');
let detalhesTxt = document.querySelector('#detalhestxt');

const pedidos = [];

radioBebida.addEventListener('click', mostraSelectBebida = () => {
    selectBebida.classList.remove('hide');
    selectPizza.classList.add('hide');
})

radioPizza.addEventListener('click', mostraSelectPizza = () => {
    selectBebida.classList.add('hide');
    selectPizza.classList.remove('hide');
})

detalhesTxt.addEventListener('focus', addPlaceholder = () => {
    if (radioPizza.checked) {
        let contador = '';

        if (selectPizza.value == 'media') {
            contador = 2;
        }
        if (selectPizza.value == 'grande') {
            contador = 3;
        }
        if (selectPizza.value == 'familia') {
            contador = 4;
        }

        detalhesTxt.placeholder = `Até ${contador} fatias`;
    }
})

detalhesTxt.addEventListener('blur', tiraPlaceholder = () => {
    detalhesTxt.placeholder = '';
})

button.addEventListener('click', adiciona = (e) => {
    e.preventDefault();
    let detalhesTxt = document.querySelector('#detalhestxt').value;
    let form = document.querySelector('form');

    let produto = '';
    if (radioPizza.checked) {
        let numSelect = selectPizza.selectedIndex;
        produto = selectPizza.options[numSelect].text;
    }
    else {
        let numSelect = selectBebida.selectedIndex;
        produto = selectBebida.options[numSelect].text;
    }

    pedidos.push(`${produto.toUpperCase()} <br> (${detalhesTxt}) <br>`);
    respostaDesc.innerHTML = pedidos.join('<br>');

    form.reset();
    radioPizza.dispatchEvent(new Event('click'));
})