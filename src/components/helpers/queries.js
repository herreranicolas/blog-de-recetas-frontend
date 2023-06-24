const URL_recetas = import.meta.env.VITE_API_RECETAS;
const URL_usuario = import.meta.env.VITE_API_USUARIO;

export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario);
    const listausuarios = await respuesta.json();
    const usuarioBuscado = listausuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
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
