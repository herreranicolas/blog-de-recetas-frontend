import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Blog de Recetas</Navbar.Brand>
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
