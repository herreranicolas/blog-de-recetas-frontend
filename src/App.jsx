import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";

function App() {
  return (
    <>
      <Menu></Menu>
      <Inicio></Inicio>
      <Footer></Footer>
    </>
  );
}

export default App;
