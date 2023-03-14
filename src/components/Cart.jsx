import React from "react";
// Import hooks react
import { useContext } from "react";
// Import context
import { CounterCartContext } from "../context/CartContext";
// Import react-router-dom
import { Link } from "react-router-dom";
// Import componentes propios
import Formulario from "./Formulario";
import ListProducts from "./ListProducts";
import ResetCarrito from "./ResetCarrito";
// Import components react-bootstrap
import Alert from "react-bootstrap/Alert";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const { cart, totalPrecio } = useContext(CounterCartContext);

  if (cart.length === 0) {
    return (
      <>
        <Container fluid className="mt-5">
          <Row className="justify-content-center align-items-center">
            <Col xs={10} md={8} lg={6}>
              <Alert
                variant="danger"
                className="align-items-center justify-items-center"
              >
                <p className="mb-0 text-center">El carrito esta vacio.</p>
              </Alert>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center mt-3">
            <Col
              xs={10}
              md={8}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Link to={"/productos"}>
                <Button variant="warning">Ver mas productos</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center mt-5">
        {cart.map((producto) => {
          return (
            <ListProducts
              key={producto.cod_rec}
              cod_rec={producto.cod_rec}
              cantidad={producto.cantidad}
              precio={producto.precio}
            />
          );
        })}
      </div>
      <div className="container-fluid d-flex flex-column align-items-center mt-2">
        <div className="col-11 col-lg-7">
          <Alert variant="dark">
            <Alert.Heading>Total: ${totalPrecio}</Alert.Heading>
          </Alert>
        </div>
      </div>
      <ResetCarrito />
      <Formulario />
    </>
  );
};

export default Cart;
