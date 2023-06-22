import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import Error404 from "./components/views/Error404";
import Login from "./components/views/Login";
import DetalleReceta from "./components/views/DetalleReceta";
import Administrador from "./components/views/Administrador";
import CrearReceta from "./components/views/recetas/CrearReceta";
import EditarReceta from "./components/views/recetas/EditarReceta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(
    "" || sessionStorage.getItem("usuario")
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
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administrador/crear-receta"
          element={<CrearReceta></CrearReceta>}
        ></Route>
        <Route
          exact
          path="/administrador/editar-receta"
          element={<EditarReceta></EditarReceta>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
