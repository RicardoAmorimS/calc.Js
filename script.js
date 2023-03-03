const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('inputCalc');
const resultCalc = document.getElementById('result');

//querySelectorAll - selecionado todos os botoes com a classe '.charKey' para um array
//forEach - para cada tecla selecionada (key) é adicionado um evento (addEventListener) quando for clicada
document.querySelectorAll('.charKey').forEach((key) => {
    key.addEventListener('click', () => {
        //utilizando o dataset.value para buscar o valor atribuido ao botão com 'data-value' 
        input.value += key.dataset.value;
    })
});

//Criando a função de limpar quando o botão id='clear' for clicado
document.getElementById('clear').addEventListener('click', () => {
    input.value = '';
    input.focus();//focando o input
});

//Quando a o botão '=' (id='equal') for clicado, a função calculate() será chamada
document.getElementById('equal').addEventListener('click', calculate);

//Array contendo as teclas permitas para a calculadora
const allowedKeys = ["(", ")", ".", "+", "-", "*", "%", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Atribuindo um função a ser chamada quando uma tecla do teclado físico for pressinado
document.addEventListener('keydown', (ev) => {
    ev.preventDefault();
    //verificando se a tecla pressionada (ev.key) está incluida dentro do array 'alowedKeys'
    if (allowedKeys.includes(ev.key)) {
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
});


//calculando a expressão
function calculate() {
    //a função eval permite que a expressão passada como parametro seja executada como código java script
    resultCalc.value = eval(input.value);
}

//adicionando a função de mudar o tema quando o botão switch theme for clicado
document.getElementById('buttonSwitchTheme').addEventListener('click', () => {
    //verificando se o tema ta tag main é dark ou ligth
    if (main.dataset.theme === 'dark') {
        //aplicando as cores das variaveis do root para o tema ligth
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--font-color', '#212529');
        main.dataset.theme = 'ligth';//alterando o nome do tema para ligth
    } else {
        //aplicando as cores das variaveis do root para o tema dark
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--font-color', '#f1f5f9');
        main.dataset.theme = 'dark';
    }
});

//adicionando a função de copiar para o botao copy
document.getElementById('copyResult').addEventListener('click', (ev) => {
    const buttonCopy = ev.currentTarget;
    buttonCopy.innerText = 'copied!';
    buttonCopy.classList.add('success');//quando o botao for cliacado ele receberá a classe .success
    navigator.clipboard.writeText(resultCalc.value);//cupiando o valor do input resultCalc

});

//quando o botao é desfocado ele volta ao normal
document.getElementById('copyResult').addEventListener('mouseout', (ev) => {
    const buttonCopy = ev.currentTarget;
    buttonCopy.innerText = 'copy';
    buttonCopy.classList.remove('success');
});