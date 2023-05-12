const input = document.getElementById('inputCalc');
//calculando a expressão
export default function () {
    const resultCalc = document.getElementById('result');
    if (input.value !== '') {
        try {
            //a função eval permite que a expressão passada como parametro seja executada como código java script
            resultCalc.value = eval(input.value);
        } catch (error) {
            input.classList.add('error');
            input.value = "ERROR";
        }
    } else {
        input.focus();
    }
}
