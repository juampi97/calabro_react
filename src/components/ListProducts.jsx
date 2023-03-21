import React from "react";
// Import hooks react
import { useContext } from "react";
// Import context
import { CounterCartContext } from "../context/CartContext";
// Import bootstrap elements
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const ListProducts = ({ cod_rec, marca, modelo, cantidad, precio }) => {
  const { removeItem } = useContext(CounterCartContext);

  return (
    <>
      <div className="col-11 col-lg-7">
        <ListGroup className="my-2" as="ol">
          <ListGroup.Item as="li" className="d-flex align-items-start">
            <div className="col-10 col-lg-11 ms-2">
              <div className="fw-bold">{cod_rec}</div>
              Marca: {marca}
              <br />
              Modelo: {modelo}
              <br />
              Cantidad: {cantidad}
              <br />
              $/Unidad: ${precio}
              <br />
              $/Total: ${cantidad * precio}
            </div>
            <div className="col-1 pt-1">
              <Button onClick={() => removeItem(cod_rec)} variant="danger">
                X
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>

      </div>
    </>
  );
};

export default ListProducts;
