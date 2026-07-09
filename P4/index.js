const BotonEl = document.querySelector(".Boton")

BotonEl.addEventListener('mouseover', (event)=>{
    const Y = (event.pageY - BotonEl.offsetTop);
    const X = (event.pageX - BotonEl.offsetLeft);

    BotonEl.style.setProperty("--Xpos", X + "px");
    BotonEl.style.setProperty("--Ypos", Y + "px");
})