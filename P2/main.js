const containerDIV = document.querySelector('.container');

const carreras = ['YouTuber','DesarrolladorWeb','Freelancer','FullStasck Junior'];

let carrerasindex = 0;
let caracterindex = 0;

cambiotext();

function cambiotext (){
    caracterindex ++;

    containerDIV.innerHTML = `<h1> I am ${carreras[carrerasindex].slice(0,caracterindex)}</h1>`;

    if (caracterindex === carreras[carrerasindex].length){
        carrerasindex++;
        caracterindex = 0; 
    }

    if (carrerasindex === carreras.length) {
        carrerasindex = 0;
    }
    setTimeout(cambiotext, 400);
       
}
