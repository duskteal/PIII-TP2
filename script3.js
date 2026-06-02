const aplicaciones = 
[
    {nombre: "Mercado Libre", instalado:  true},
    {nombre: "X", instalado:  true},
    {nombre: "Trading View", instalado:  false},
    {nombre: "Google Docs", instalado:  true},
    {nombre: "Monument Valley", instalado:  false},
    {nombre: "Twitch", instalado:  false}
];

const aplicacionesInstaladas = aplicaciones.filter(aplicacion => aplicacion.instalado == true); // Uso de filter
const contenedorApp = document.getElementById("contenedorApp");

const btnSoloInstaladas = document.getElementById("btnSoloInstaladas");

let estadoBoton = 0;

listaApps();

btnSoloInstaladas.addEventListener("click", listaApps);

function listaApps(){
    contenedorApp.replaceChildren();
    if(estadoBoton == 0){
    aplicaciones.forEach(aplicacion =>{
            //limpiarApps();
            const tarjetaApp = document.createElement("div");
            const textoApp = document.createElement("p");
            if(aplicacion.instalado == true){
                textoApp.classList.add("appsInstaladas")
            }
            else{
                textoApp.classList.add("appsTarjeta");
            };
            
            textoApp.textContent = aplicacion.nombre;
            contenedorApp.appendChild(textoApp);
            btnSoloInstaladas.textContent = "Mostrar solo instaladas";
            
            estadoBoton = 1;
        });
    }
    else{
    aplicacionesInstaladas.forEach(aplicacion=>{
            //limpiarApps();
            const tarjetaApp = document.createElement("div");
            const textoApp = document.createElement("p");
            textoApp.classList.add("appsInstaladas");
            textoApp.textContent = aplicacion.nombre;
            contenedorApp.appendChild(textoApp);
            btnSoloInstaladas.textContent = "Mostrar todo";
            
            estadoBoton = 0;
        });
    };
};