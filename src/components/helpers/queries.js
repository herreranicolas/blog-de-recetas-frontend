const URL_recetas = import.meta.env.VITE_API_RECETAS;
const URL_usuario = import.meta.env.VITE_API_USUARIO;

export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      nombreUsuario: datos.nombreUsuario,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const obtenerListaRecetas = async () => {
  try {
    const respuesta = await fetch(URL_recetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

export const crearReceta = async (receta) => {
  try {
    const respuesta = await fetch(URL_recetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarReceta = async (receta, id) => {
  try {
    const respuesta = await fetch(URL_recetas + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarReceta = async (id) => {
  try {
    const respuesta = await fetch(URL_recetas + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerReceta = async (id) => {
  try {
    const respuesta = await fetch(URL_recetas + "/" + id);
    const receta = await respuesta.json();
    return [receta, respuesta.status];
  } catch (error) {
    console.log(error);
  }
};
