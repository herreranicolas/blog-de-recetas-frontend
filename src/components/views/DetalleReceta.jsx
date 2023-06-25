import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  Tabs,
  Tab,
  Spinner,
} from "react-bootstrap";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { obtenerReceta } from "../helpers/queries";

const DetalleReceta = () => {
  const [key, setKey] = useState("ingredientes");
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  const [receta, setReceta] = useState({});
  const { id } = useParams();

  useEffect(() => {
    obtenerReceta(id).then((respuesta) => {
      if (respuesta) {
        setReceta(respuesta);
        setMostrarSpinner(false);
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No se pudo obtener la receta. Intente realizar esta operación en otro momento.",
          icon: "error",
          confirmButtonColor: "#fa8072",
        });
      }
    });
  }, []);

  return (
    <section className="py-3 seccionPrincipal d-flex justify-content-center align-items-center bg-dark text-light">
      <Container>
        {mostrarSpinner ? (
          <Row className="text-center">
            <h2>
              Cargando receta...
              <Spinner animation="border" variant="danger"></Spinner>
            </h2>
          </Row>
        ) : (
          <Row>
            <h1>{receta.nombre}</h1>
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <p className="font-poppins">{receta.descripcion}</p>
              <Col>
                <Image src={receta.imagen} thumbnail />
              </Col>
            </Col>
            <Col xs={12} md={6} className="font-poppins">
              <Tabs
                activeKey={key}
                id="controlled-tab-example"
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="ingredientes" title="Ingredientes">
                  <ul>
                    {receta.ingredientes.map((ingrediente, index) => (
                      <li key={index}>
                        <span className="text-capitalize">{ingrediente}</span>
                      </li>
                    ))}
                  </ul>
                </Tab>
                <Tab eventKey="instrucciones" title="Paso a paso">
                  <ol>
                    {receta.pasos.map((ingrediente, index) => (
                      <li key={index}>
                        <span>{ingrediente}</span>
                      </li>
                    ))}
                  </ol>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default DetalleReceta;
