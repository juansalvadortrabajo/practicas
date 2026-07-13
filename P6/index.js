const inputEL = document.querySelector('.input');
const bodyEl = document.body;
const modoGuardado = localStorage.getItem('modoOscuro');

if (modoGuardado === 'true') {
    inputEL.checked = true;
} else {
    inputEL.checked = false;
}

modoBody();

function modoBody() {
    if (inputEL.checked) {
        bodyEl.style.background = 'black';
        bodyEl.style.color = 'white';
    } else {
        bodyEl.style.background = 'white';
        bodyEl.style.color = 'black';
    }
}

inputEL.addEventListener('change', () => {
    localStorage.setItem('modoOscuro', inputEL.checked);
    modoBody();
});

