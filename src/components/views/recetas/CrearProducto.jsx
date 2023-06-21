import { Form, Button, Container } from "react-bootstrap";

const CrearProducto = () => {
  return (
    <section className="seccionPrincipal font-poppins">
      <Container className="py-5">
        <h1 className="display-5 font-ds">Nueva receta</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formNombreProdcuto">
            <Form.Label>Nombre*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Torta de chocolate" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Descripcion*</Form.Label>
            <Form.Control type="number" placeholder="Ej: Un delicioso pastel" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Ingredientes*</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: Chocolate, harina, azucar, manteca"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Pasos*</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: Mezclar ingredientes, agregar huevos y manteca, etc. "
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </Form.Group>
          <Button className="gradient-custom-2" type="submit">
            Crear receta
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default CrearProducto;
