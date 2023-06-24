import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import Error404 from "./components/views/Error404";
import Login from "./components/views/Login";
import DetalleReceta from "./components/views/DetalleReceta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(
    {} || sessionStorage.getItem("usuario")
  );

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route>
        <Route
          exact
          path="/detalle"
          element={<DetalleReceta></DetalleReceta>}
        ></Route>
        <Route
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdministrador></RutasAdministrador>
            </RutasProtegidas>
          }
        ></Route>

        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
