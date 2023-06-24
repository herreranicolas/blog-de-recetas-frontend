import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardReceta({ receta }) {
  return (
    <Card
      as={Col}
      style={{ width: "18rem" }}
      bg="dark"
      text="light"
      className="me-md-3 mb-3"
    >
      <Card.Img variant="top" src={receta.imagen} />
      <Card.Body>
        <Card.Title>{receta.nombre}</Card.Title>
        <Card.Text>{receta.descripcion}</Card.Text>
        <Button as={Link} variant="outline-danger" to="/detalle">
          Ver receta
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardReceta;
