import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const usuarioLogueado = sessionStorage.getItem("usuario") || null;
  if (!usuarioLogueado) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
};

export default RutasProtegidas;
