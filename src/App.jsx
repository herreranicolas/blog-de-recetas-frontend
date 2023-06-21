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

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <Inicio></Inicio> */}
      {/* <Error404></Error404> */}
      {/* <Login></Login> */}
      {/* <DetalleReceta></DetalleReceta> */}
      {/* <Administrador></Administrador> */}
      {/* <CrearReceta></CrearReceta> */}
      <EditarReceta></EditarReceta>
      <Footer></Footer>
    </>
  );
}

export default App;
