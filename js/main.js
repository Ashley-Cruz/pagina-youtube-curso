let ubicacionPrincipal = window.pageYOffset;

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;

    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;
})

//Menú

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){ /*Si semafoto es verdadero*/
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff"; /*Esto hace que el menu hamburguesa se ponga blanco al apretarle*/
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color = "#000"; /*Y cuando ya está en blanco, este vuelve a hacerce negro cuando le vuelven a apreptar*/
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos")
})