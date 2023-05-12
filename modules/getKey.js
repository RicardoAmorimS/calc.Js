import calculate from "./calculate.js";
const input = document.getElementById('inputCalc');

//querySelectorAll - selecionado todos os botoes com a classe '.charKey' para um array
//forEach - para cada tecla selecionada (key) é adicionado um evento (addEventListener) quando for clicada
function atributeKeyArray(key) {
    key.addEventListener('click', () => {
        if (input.classList.value === 'error') {
            input.classList.remove('error');
            input.value = key.dataset.value;
        } else {
            //utilizando o dataset.value para buscar o valor atribuido ao botão com 'data-value' 
            input.value += key.dataset.value;
        }

    })
};

//Criando a função de limpar quando o botão id='clear' for clicado
function clearButton() {
    input.value = '';
    input.focus();//focando o input
};

//Quando a o botão '=' (id='equal') for clicado, a função calculate() será chamada
document.getElementById('equal').addEventListener('click', calculate);

//Array contendo as teclas permitas para a calculadora
const allowedKeys = ["(", ")", ".", "+", "-", "*", "%", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Atribuindo um função a ser chamada quando uma tecla do teclado físico for pressinado
function keyDownPress(ev) {
    ev.preventDefault();
    if (input.classList.value === 'error' && allowedKeys.includes(ev.key)) {
        input.classList.remove('error');
        input.value = ev.key;
    } else if (allowedKeys.includes(ev.key)) {
        //adicionado a tecla pressionada no input
        input.value += ev.key;
        return
        //caso a tecla pressionada seja 'Enter', a função calculate() será chamada
    } else if (ev.key === 'Enter') {
        calculate();
        //caso a tecla 'Backspace' seja pressionada o ultimo elemento da string será eliminado.
    } else if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1);
    }
};



export { atributeKeyArray, clearButton, keyDownPress }