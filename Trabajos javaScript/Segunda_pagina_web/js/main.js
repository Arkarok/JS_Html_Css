/* Esconder el Menu al desplazarse */
let ubicacionPrincipal=window.pageYOffset;

window.addEventListener("scroll", function(){
    let desplazamientoActual=window.pageYOffset;

    if(ubicacionPrincipal>=desplazamientoActual){
        this.document.getElementsByTagName("nav")[0].style.top="0px"
    }else{
        this.document.getElementsByTagName("nav")[0].style.top="-100px"
    }

    ubicacionPrincipal=desplazamientoActual;
})

/* Esconder y desplegar el Menu desde el icono hamburguesa */
let enlacesHeader=document.querySelectorAll(".enlaces-header")[0];
let semaforo=true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){

    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        semaforo=false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color="#1fde82";
        semaforo=true;
    }

    enlacesHeader.classList.toggle("menudos")
})

