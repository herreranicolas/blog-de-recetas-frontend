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
      <Card.Img
        variant="top"
        src={receta.imagen}
        style={{ height: "11.5rem" }}
      />
      <Card.Body>
        <Card.Title>{receta.nombre}</Card.Title>
        <Card.Text>{receta.descripcion}</Card.Text>
      </Card.Body>
      <div className="font-poppins text-uppercase mb-3 mt-auto px-3">
        <Button
          as={Link}
          variant="outline-danger"
          to={"/detalle/" + receta._id}
          className="fw-bold"
        >
          Ver receta
        </Button>
      </div>
    </Card>
  );
}

export default CardReceta;
