import React from "react";
// Import hooks react
import { useContext } from "react";
// Import context
import { CounterCartContext } from "../context/CartContext";
// Import bootstrap elements
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";


const ListProducts = ({ cod_rec, cantidad }) => {

    const { hdmiAdicional, vgaAdicional, removeItem } = useContext(CounterCartContext);

  return (
    <>
      <div className="col-10 col-lg-7">
        <ListGroup className="my-1" as="ol" numbered>
          <ListGroup.Item as="li" className="d-flex align-items-start">
            <div className="col-11 ms-2">
              <div className="fw-bold">{cod_rec}</div>
              Cantidad: {cantidad}
            </div>
            <div className="col-1 pt-1">
              <Button onClick={ ()=>removeItem(cod_rec)} variant="danger">X</Button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex align-items-start">
            <div className="col-11 ms-2">
              <div className="fw-bold">HDMI adicional</div>
              Cantidad: {hdmiAdicional}
            </div>
            <div className="col-1 pt-1">
              <Button onClick={ ()=>removeItem(cod_rec)} variant="danger">X</Button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex align-items-start">
            <div className="col-11 ms-2">
              <div className="fw-bold">VGA adicional</div>
              Cantidad: {vgaAdicional}
            </div>
            <div className="col-1 pt-1">
              <Button onClick={ ()=>removeItem(cod_rec)} variant="danger">X</Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default ListProducts;
