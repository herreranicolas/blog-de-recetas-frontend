import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardReceta() {
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
        src="https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
      <Card.Body>
        <Card.Title>Spaghetti a la bolognesa</Card.Title>
        <Card.Text>
          Un clásico plato de pasta italiano con una salsa bolognesa rica y
          sabrosa.
        </Card.Text>
        <Button variant="outline-danger">Ver receta</Button>
      </Card.Body>
    </Card>
  );
}

export default CardReceta;
