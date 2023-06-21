import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon } from "mdb-react-ui-kit";

function Menu() {
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <span className="me-2">
            <MDBIcon fas icon="utensils" size="lg" />
          </span>
          Blog de Recetas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Iniciar sesión</Nav.Link>
            <Nav.Link href="#link">Administrador</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
