const resultCalc = document.getElementById('result');
//Função de copiar o resultado da operação
function copyResult(ev) {
    const buttonCopy = ev.currentTarget;
    buttonCopy.innerText = 'copied!';
    buttonCopy.classList.add('success');//quando o botao for clicado ele receberá a classe .success
    navigator.clipboard.writeText(resultCalc.value);//cupiando o valor do input resultCalc

};

//quando o botao é desfocado ele volta ao normal
function mouseOutButtonCopy(ev) {
    const buttonCopy = ev.currentTarget;
    buttonCopy.innerText = 'copy';
    buttonCopy.classList.remove('success');
};

export { copyResult, mouseOutButtonCopy };