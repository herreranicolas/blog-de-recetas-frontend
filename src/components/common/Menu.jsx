import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Menu({ usuarioLogueado, setUsuarioLogueado }) {
  const navegacion = useNavigate();
  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    setUsuarioLogueado("");
    navegacion("/");
  };
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FontAwesomeIcon icon={faUtensils} className="me-2" />
          Blog de Recetas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {usuarioLogueado ? (
              <>
                <NavLink end className="nav-item nav-link" to="/administrador">
                  Administrador
                </NavLink>
                <div>
                  <Button
                    variant="dark"
                    className="text-capitalize"
                    onClick={cerrarSesion}
                  >
                    Cerrar sesión
                  </Button>
                </div>
              </>
            ) : (
              <NavLink end className="nav-item nav-link" to="/login">
                Iniciar sesión
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
