console.log("JS OK");

const meriendas = [
    "Café con leche y tres medialunas", 
    "Jugo de naranja con ensalada de frutas", 
    "Café Americano y dos tostados",
    "Batido de vainilla con porción de torta de chocolate",
    "Té Earl Grey y masas finas"
];
    
const pizarra = document.getElementById("pizarra");
const listaMeriendas = document.getElementById("listaMeriendas");

let contador = 0;
meriendas.forEach(merienda => {
    const nuevaMerienda = document.createElement("li");
    nuevaMerienda.textContent = merienda;
    listaMeriendas.appendChild(nuevaMerienda);
    
    contador++;
});

const botonContador = document.getElementById("botonContador");
const contadorDeMeriendas = document.getElementById("contadorDeMeriendas");

botonContador.addEventListener("click", () => {
    contadorDeMeriendas.textContent = "Cantidad de Meriendas: " + contador;
    console.log(contador);
    }
)

// const meriendaSeleccionada = document.querySelectorAll("#pizarra li");

// meriendaSeleccionada.forEach(seleccion => {
//     seleccion.addEventListener("click", () => {
//         seleccion.classList.toggle("seleccionado");             usar en 2do
//         actualizarContador();
//     });
// });

// function actualizarContador(){
//     const contador = document.getElementById("contador");
//     const botonContador = document.getElementById("botonContador");
//     const cantidadSeleccionados = document.querySelectorAll("#pizarra .seleccionado").length;
    
//     botonContador.addEventListener("click", () => {
//         contador.textContent = "Seleccionados: " + cantidadSeleccionados;
//     });
// };





// const cuenta = document.createElement("p");       

// function actualizarContador(){
//     const contadorSeleccionados = document.getElementById("contadorSeleccionados"); // espacio div
//     const cantidadSeleccion = document.querySelectorAll("#pizarra .seleccionado").length; // cantidad de marcados dentro del codigo
//     console.log(cantidadSeleccion); // verificacion en consola

//     if(cantidadSeleccion > 0){   // si hay marcados, aparece el texto. Si no, desaparece
//         cuenta.textContent = "Seleccionados: " + cantidadSeleccion;
//         contadorSeleccionados.appendChild(cuenta);
//     }
//     else{
//         cuenta.remove();
//     };
//};