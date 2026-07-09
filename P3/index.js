const mesEL = document.getElementById('mes');
const diaEL = document.getElementById('dianomb');
const numeroEL = document.getElementById('dianum');
const añoEL = document.getElementById('year');

const fechaActual = new Date();
mesEL.innerText = fechaActual.toLocaleString('es', { month: 'long' });
diaEL.innerText = fechaActual.toLocaleString('es', { weekday: 'long' });
numeroEL.innerText = fechaActual.getDate();
añoEL.innerText = fechaActual.getFullYear();