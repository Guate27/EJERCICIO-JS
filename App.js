const habilidades = ["PYTHON", "LINUX", "IA", "N8N", "APIS"];

function mostrarEtiquetas (habilidades) {
    habilidades.forEach ( (habilidad) => {

        const nuevo_spanner = document.createElement("span");

        nuevo_spanner.classList.add("etiqueta");

        nuevo_spanner.textContent = habilidad;



        const contenedor_etiquetas = document.getElementById("etiquetas");

        contenedor_etiquetas.appendChild(nuevo_spanner);
    })
} 

function construirPerfil (datos) {
    return {
        nombre: datos.nombre,

        usuario: datos.login,

        email: datos.email,

        ciudad: datos.location,

        avatar: datos.avatar_url,
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




    const id_avatar = document.getElementById("avatar").src

    id_avatar = perfil.avatar
    
}