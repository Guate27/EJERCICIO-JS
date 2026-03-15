const habilidades = ["PYTHON", "LINUX", "IA", "N8N", "APIS"];

function mostrarEtiquetas (habilidades) {
    habilidades.forEach ( (habilidad) => {

        const nuevo_spanner = document.createElement("span");

        nuevo_spanner.class.add("etiqueta");

        nuevo_spanner.textContent = habilidad;

        const contenedor_etiquetas = document.getElementById("etiquetas");

        contenedor_etiquetas.appendChild(nuevo_spanner);


        




    })
} 