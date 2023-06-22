import { usuarioAdmin } from "../../../db.json";

export const iniciarSesion = (usuario) => {
  if (usuario.email === usuarioAdmin[0].email) {
    if (usuario.password === usuarioAdmin[0].password) {
      return usuarioAdmin[0];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
