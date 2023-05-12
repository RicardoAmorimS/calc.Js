export default function () {
    const main = document.querySelector('main');
    const root = document.querySelector(':root');
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
};

