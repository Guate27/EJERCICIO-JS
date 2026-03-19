const habilidades = ["PYTHON", "LINUX", "IA", "N8N", "APIS"];

function mostrarEtiquetas (habilidades) {

    const contenedor_etiquetas = document.getElementById("etiquetas");

    contenedor_etiquetas.innerHTML = "";
    

    habilidades.forEach ( (habilidad) => {

        const nuevo_spanner = document.createElement("span");

        nuevo_spanner.classList.add("etiqueta");

        nuevo_spanner.textContent = habilidad;

        nuevo_spanner.style.marginRight = "8px";

        

        contenedor_etiquetas.appendChild(nuevo_spanner);
        
    })
} 

function construirPerfil (datos) {
    return  {
        nombre: datos.name || "No disponible",

        usuario: datos.login || "No disponible",

        email: datos.email || "No disponible",

        ciudad: datos.location || "No disponible",

        avatar: datos.avatar_url || "Imagen no disponible",
    }

}

function renderizarPerfil (perfil) {
    const id_nombre = document.getElementById("nombre");

    id_nombre.textContent = perfil.nombre;


    const id_usuario = document.getElementById("usuario");

    id_usuario.textContent = perfil.usuario;



    const id_email = document.getElementById("email");

    id_email.textContent = perfil.email;
    


    const id_ciudad = document.getElementById("ciudad");

    id_ciudad.textContent = perfil.ciudad; 




    document.getElementById("avatar").src = perfil.avatar;
    
}



document.getElementById("btn").addEventListener("click", cargarUsuarios);





let n = 0;  
async function cargarUsuarios () {

    const id_mensaje = document.getElementById("mensaje")

    id_mensaje.textContent = "Cargando...";

    

    try {

        

        console.log(id_mensaje);


        const acceso_API = await fetch("https://api.github.com/users");

        let user_data = await acceso_API.json();

        let actual_user = user_data [n]




        let perfil = construirPerfil(actual_user);

        renderizarPerfil(perfil);

        mostrarEtiquetas(habilidades);

        id_mensaje.textContent = "";


        n = n+1;






        


    }

    catch {
        id_mensaje.textContent = "Error al cargar usuario";
        console.log(id_mensaje)
        
    }

}
