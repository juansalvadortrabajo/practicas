const bodyEL = document.querySelector("body");

bodyEL.addEventListener('mousemove', ()=> {
    const Xpos = event.offsetX;
    const Ypos = event.offsetY;
    const spanEL = document.createElement('span');

    spanEL.style.left = Xpos + 'px';
    spanEL.style.top = Ypos + 'px';
    
    const tamano = Math.random()*100;
    spanEL.style.width = tamano + 'px';
    spanEL.style.height = tamano + 'px';

    bodyEL.appendChild(spanEL);

    setTimeout (()=>{
        spanEL.remove();
    },1500)
})

