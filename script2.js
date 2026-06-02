console.log("JS OK");

const destinos = [
    {
    ciudad: "Düsseldorf", 
    pais: "Alemania",
    poblacion: 629000
    },
    {
    ciudad: "Hokkaidō",
    pais: "Japón",
    poblacion: 5100000
    },
    {
    ciudad: "Volgogrado",
    pais: "Rusia",
    poblacion: 1000000
    },
    {
    ciudad: "Riffa",
    pais: "Bahrein",
    poblacion: 120000
    }
];

const contenedorTarjetas = document.getElementById("contenedorTarjetas");

destinos.forEach(destino => {
    const tarjeta = document.createElement("div");

    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
        <h1>${destino.ciudad}</h1>
        <h2>${destino.pais}</h2>
        <p>Población: ${destino.poblacion}</p>
    `;

    contenedorTarjetas.appendChild(tarjeta);
});

const tarjeta = document.querySelectorAll(".tarjeta");
const contenedorSelecciones = document.getElementById("contenedorSelecciones");
const contadorTexto = document.createElement("p");

tarjeta.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("seleccionado"); // uso del classList
        actualizarContador();
        
    });
});


function actualizarContador(){

    const cantidadSeleccionados = document.querySelectorAll(".seleccionado").length;
    console.log(cantidadSeleccionados);

    if(cantidadSeleccionados > 0){
        contadorTexto.textContent = "Seleccionados: " + cantidadSeleccionados;
        contenedorSelecciones.appendChild(contadorTexto);
    }
    else{
        contadorTexto.remove();
    }
};