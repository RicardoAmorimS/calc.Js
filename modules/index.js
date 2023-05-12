import calculate from "./calculate.js";
import { copyResult, mouseOutButtonCopy } from "./copy.js";
import { clearButton, atributeKeyArray, keyDownPress } from "./getKey.js";
import switchTheme from "./switchTheme.js";





document.getElementById('copyResult').addEventListener('click', (copyResult));
document.getElementById('copyResult').addEventListener('mouseout', (mouseOutButtonCopy))
//mudar o tema quando o botão switch theme for clicado
document.getElementById('buttonSwitchTheme').addEventListener('click', switchTheme);

document.querySelectorAll('.charKey').forEach(atributeKeyArray);

document.getElementById('clear').addEventListener('click', clearButton);

document.addEventListener('keydown', keyDownPress);