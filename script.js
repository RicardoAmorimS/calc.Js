const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('inputCalc');
const resultCalc = document.getElementById('result')

const allowedKeys = ["(", ")", ".", "+", "-", "*", "%", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

document.addEventListener('keydown', (ev) => {
    ev.preventDefault();
    if (allowedKeys.includes(ev.key.toString())) {
        console.log(Number(ev.key) + "Estã incluido");
        console.log(typeof (ev.key))
        input.value += ev.key;
    } else if (ev.key.toString() = "enter") {
        console.log(ev.key);
    }
});