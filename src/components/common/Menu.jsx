import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="me-2">
            <MDBIcon fas icon="utensils" size="lg" />
          </span>
          Blog de Recetas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-item nav-link" to="/login">
              Iniciar sesión
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/administrador">
              Administrador
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
