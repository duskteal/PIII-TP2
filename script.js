console.log("JS OK");

const meriendas = [
    "Café con leche y tres medialunas", 
    "Jugo de naranja con ensalada de frutas", 
    "Café Americano y dos tostados",
    "Batido de vainilla con porción de torta de chocolate",
    "Té Earl Gray y masas finas"
];
    

const listaMeriendas = document.getElementById("listaMeriendas");


meriendas.forEach(merienda => {
    const nuevaMerienda = document.createElement("li");
    nuevaMerienda.textContent = merienda;
    listaMeriendas.appendChild(nuevaMerienda);
});



const seleccionado = document.getElementById("seleccionado");
    if(cantidadSeleccion > 0){
        pizarra.createElement("p");
        seleccionado.textContent("Seleccionados: ", cantidadSeleccion);
        pizarra.appendChild(seleccionado);
    }
    else{
        seleccionado.delete();
    };
