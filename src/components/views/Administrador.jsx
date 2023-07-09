import { Container, Row, Col, Table, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemReceta from "./recetas/ItemReceta";
import { useEffect, useState } from "react";
import { obtenerListaRecetas } from "../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
  const [recetas, setRecetas] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    obtenerListaRecetas().then((respuesta) => {
      if (respuesta) {
        setRecetas(respuesta);
        setMostrarSpinner(false);
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "Intente realizar esta operación en otro momento.",
          icon: "error",
          confirmButtonColor: "#fa8072",
        });
      }
    });
  }, []);

  return (
    <section className="seccionPrincipal font-poppins">
      <Container className="py-3">
        <Row className="mb-3">
          <Col>
            <h1 className="text-center display-5">Administrar recetas</h1>
            <div className="text-center">
              <Button
                as={Link}
                className="btn gradient-custom-2"
                to="/administrador/crear-receta"
              >
                Agregar nueva receta
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Table responsive striped bordered hover variant="dark">
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
            {mostrarSpinner ? (
              <tbody>
                <tr>
                  <td colSpan={6}>
                    <div className="text-center">
                      <Spinner
                        animation="border"
                        variant="danger"
                        className="text-danger"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {recetas.map((receta) => (
                  <ItemReceta
                    key={receta._id}
                    receta={receta}
                    recetas={recetas}
                    setRecetas={setRecetas}
                    setMostrarSpinner={setMostrarSpinner}
                  ></ItemReceta>
                ))}
              </tbody>
            )}
          </Table>
        </Row>
      </Container>
    </section>
  );
};

export default Administrador;
