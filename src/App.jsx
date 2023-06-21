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
import CrearProducto from "./components/views/recetas/CrearProducto";

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <Inicio></Inicio> */}
      {/* <Error404></Error404> */}
      {/* <Login></Login> */}
      {/* <DetalleReceta></DetalleReceta> */}
      {/* <Administrador></Administrador> */}
      <CrearProducto></CrearProducto>
      <Footer></Footer>
    </>
  );
}

export default App;
