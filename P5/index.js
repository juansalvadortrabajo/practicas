const botonEL = document.querySelector(".btn");
const imagencontainerEL = document.querySelector(".contenedor-imagen");

botonEL.addEventListener ("click", ()=>{
    imageNum = 10;
    nuevaimagen();
    });


function nuevaimagen() {

    for (let index = 0; index < imageNum; index++) {
        
        const newimgEL = document.createElement('img');
        newimgEL.src= `https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`;
       imagencontainerEL.appendChild(newimgEL); 
    }
    
}