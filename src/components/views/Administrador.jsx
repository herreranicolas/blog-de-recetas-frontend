import { Container, Row, Col, Table, Button } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";

const Administrador = () => {
  return (
    <section className="seccionPrincipal font-poppins">
      <Container className="py-3">
        <Row className="mb-3">
          <Col>
            <h1 className="text-center display-5">Administrar recetas</h1>
            <div className="text-center">
              <Button className="btn gradient-custom-2" to="/administrar/crear">
                Agregar nueva receta
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Ingredientes</th>
                <th>Pasos</th>
                <th>URL de Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <ItemReceta></ItemReceta>
            </tbody>
          </Table>
        </Row>
      </Container>
    </section>
  );
};

export default Administrador;
