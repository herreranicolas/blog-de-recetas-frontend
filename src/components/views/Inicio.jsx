import { Container, Row } from "react-bootstrap";
import SliderInicio from "./recetas/SliderInicio";
import CardReceta from "./recetas/CardReceta";

const Inicio = () => {
  return (
    <section className="container seccionPrincipal">
      <h1 className="text-center py-2 fw-bolder">Recetas de Cocina</h1>
      <SliderInicio></SliderInicio>
      <Container className="py-3">
        <Row
          xs={1}
          md={2}
          lg={3}
          xl={4}
          className="justify-content-center align-items-center"
        >
          <CardReceta />
          <CardReceta />
          <CardReceta />
          <CardReceta />
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
