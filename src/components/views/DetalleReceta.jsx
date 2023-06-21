import { useState } from "react";
import { Col, Container, Row, Image, Tabs, Tab } from "react-bootstrap";

const DetalleReceta = () => {
  const [key, setKey] = useState("ingredientes");
  return (
    <section className="py-3 seccionPrincipal d-flex justify-content-center align-items-center bg-dark text-light">
      <Container>
        <Row>
          <h1>Spaghetti a la bolognesa</h1>
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <p className="font-poppins">
              Un clásico plato de pasta italiano con una salsa bolognesa rica y
              sabrosa.
            </p>
            <Col>
              <Image
                src="https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                thumbnail
              />
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
                  <li>
                    <span>Spaghetti</span>
                  </li>
                  <li>
                    <span>Carne molida</span>
                  </li>
                  <li>
                    <span>Tomates</span>
                  </li>
                  <li>
                    <span>Cebolla</span>
                  </li>
                  <li>
                    <span>Ajo</span>
                  </li>
                </ul>
              </Tab>
              <Tab eventKey="instrucciones" title="Paso a paso">
                <ol>
                  <li>
                    <span>Cocinar la pasta al dente</span>
                  </li>
                  <li>
                    <span>Sofreír la cebolla y el ajo</span>
                  </li>
                  <li>
                    <span>Agregar la carne molida y los tomates</span>
                  </li>
                  <li>
                    <span>Cocinar a fuego lento por 30 minutos</span>
                  </li>
                  <li>
                    <span>Servir la salsa sobre la pasta</span>
                  </li>
                </ol>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DetalleReceta;
