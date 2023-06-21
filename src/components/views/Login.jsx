import { Form, Button, Container, Card } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="seccionPrincipal d-flex justify-content-center align-items-center">
      <Form className="w-75 border border-3 border-danger rounded-3 p-3">
        <h5 className="text-center fs-2 pb-1 fw-bolder border-bottom border-2 border-danger">
          Iniciar sesión
        </h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-dark">Email</Form.Label>
          <Form.Control type="email" placeholder="Correo electrónico" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-dark">Password</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <div className="text-center ">
          <Button variant="danger" type="submit" className="fw-bold">
            Ingresar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
