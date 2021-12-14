"use strict"

document.title=("Trabajo 3");

document.write(`<center><h1 style="color:#ffffff;">NBA Shop</h1></center>`);

document.write(`<h2 style="color: #ffffff;">Categorías</h2>`);


// BOTONES
const datos=[];
tienda.forEach(
    (categoria)=>{
        datos.push(categoria["categoria"]);
    }
)
console.log(datos);



let botonesSinRepetir=datos.filter(
    (elemento,posicion)=>{
        return datos.indexOf(elemento)==posicion;
    }
)

botonesSinRepetir.forEach(
    (botones)=>{
        document.write(`<button class="botones_menu" value="${botones}"><strong>${botones}</strong></button>`);
    }
)

document.write("<br>");


// DATOS
tienda.forEach(
    (producto)=>{
        document.write(`<div class="tabla_productos">
                            <img class="miniatura" src="${producto["imagen"]}">
                        </div>
                        <div class="ocultar">
                            <div>
                                <img src="${producto["imagen"]}">
                                <hr>
                                <h2>Nombre: ${producto["nombre"]}</h2>
                                <hr>
                                <h2>Precio: ${producto["precio"]}€</h2>
                                <hr>
                                <h2 class="union">Descripcion: ${producto["descripcion"]}</h2>
                                <hr>
                                <button class="salir">Salir</button>
                            </div>
                        </div>`)
    }
);

const filtrando=document.querySelectorAll("button.verde");
const sinFiltrar=document.querySelectorAll("tabla_productos");

if(filtrando.length==0){
    sinFiltrar.forEach(
        (producto)=>{
            producto.classList.remove("ocultar");
        }
    )
}else{
    let categoria="";

    filtrando.forEach(
        (boton)=>{
            categoria+=boton.value+"";
        }
    )
    sinFiltrar.forEach(
        (producto)=>{
            if(sinFiltrar.includes(producto.classList[0])){
                producto.classList.remove("ocultar");
            }else{
                producto.classList.add("ocultar");
            }
        }
    )
}