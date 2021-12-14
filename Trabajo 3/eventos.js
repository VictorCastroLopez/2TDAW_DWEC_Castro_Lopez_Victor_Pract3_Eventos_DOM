"use strict"


// Botones categoria
const botones=document.querySelectorAll(".botones_menu");

botones.forEach(
    (boton)=>{
        boton.addEventListener("click",
            ()=>{
                if(getComputedStyle(boton).backgroundColor==="rgb(255, 0, 0)"){
                    boton.classList="verde";
                }else{
                    boton.classList="botones_menu";
                }
            }
        );
    }
);




// Mostrar datos productos
const datos_imagenes=document.querySelectorAll(".tabla_productos");
const div_oculto=document.querySelectorAll(".ocultar");
const boton_salir=document.querySelectorAll(".salir");

boton_salir.forEach(
    (boton)=>{
        const padre=boton.parentElement.parentElement;
        boton.addEventListener("click",
            ()=>{
                if(padre.classList.contains("mostrar")){
                    padre.classList.remove("mostrar");
                    padre.classList.add("ocultar");
                }
            }
        )
    }
)

datos_imagenes.forEach(
    (informacion)=>{
        const datos=informacion.nextElementSibling;
        informacion.addEventListener("click",
            ()=>{
                div_oculto.forEach(
                    ()=>{
                        if(datos.classList.contains("ocultar")){
                            datos.classList.remove("ocultar");
                            datos.classList.add("mostrar");
                        }else{
                            datos.classList.remove("mostrar");
                            datos.classList.add("ocultar");
                        }
                    }
                )
            }
        )
        datos.addEventListener("click",
            ()=>{
                div_oculto.forEach(
                    ()=>{
                        if(datos.classList.contains("ocultar")){
                            datos.classList.remove("ocultar");
                            datos.classList.add("mostrar");
                        }else{
                            datos.classList.remove("mostrar");
                            datos.classList.add("ocultar");
                        }
                    }
                )
            }
        )
        const hijos=datos.childNodes;
        hijos.forEach(
            (hijo)=>{
                hijo.addEventListener("click",
                    (evento)=>{
                        evento.stopPropagation();
                    }
                )
            }
        )
    }
)
