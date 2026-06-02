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
);