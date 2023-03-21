import React from "react";
// Import Hook de react-router-dom
import { useParams } from "react-router-dom";
// Import Hook
import { useState, useEffect } from "react";
// Import componentes propios
import SpinnerLoad from "./SpinnerLoad";
import ItemDetail from "./ItemDetail";
// Import firebase
import { doc, getDoc, getFirestore } from "firebase/firestore";
// Import componenetes react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const ItemDetailContainer = () => {
  // Obtengo el parametro de la url
  const { id } = useParams();

  const [productosLoaded, setProductosLoaded] = useState(false);
  const [producto, setProducto] = useState([]);
  const [errorProducto, setErrorProducto] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const q = doc(db, "productos", `${id}`);
    getDoc(q).then((snapshot) => {
      if (snapshot.exists()) {
        const doc = snapshot.data();
        setProducto(doc);
        setProductosLoaded(true);
      } else {
        setErrorProducto(true);
      }
    });
  }, []);

  if (!productosLoaded && !errorProducto) {
    return <SpinnerLoad />;
  }

  if (errorProducto) {
    return (
      <>
        <Container>
          <Row className="d-flex justify-content-around mt-5">
            <Col xs={10} md={8}>
              <Alert key="warning" variant="warning">
                <h2 className="text-center">Producto no encontrado</h2>
              </Alert>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <div className="container-fluid d-flex justify-content-around detail-container my-3">
        <div className="col-11 d-flex flex-column flex-lg-row align-items-center justify-content-around">
          {productosLoaded ? <ItemDetail producto={producto} /> : ""}
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
