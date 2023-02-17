import React from "react";

// Import hook
import { useState } from "react";

// Import components bootstrap
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock }) => {
  const cantidadInicial = 1;
  const [cantidad, setCantidad] = useState(cantidadInicial);

  const aumentarCantidad = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const disminuirCantidad = () => {
    if (cantidad > cantidadInicial) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <>
      <Button
        variant="outline-light"
        className="text-dark fw-bold"
        onClick={disminuirCantidad}
      >
        -
      </Button>
      <div className="col-6 d-flex justify-content-around">{ cantidad }</div>
      <Button
        variant="outline-light"
        className="text-dark fw-bold"
        onClick={aumentarCantidad}
      >
        +
      </Button>
    </>
  );
};

export default ItemCount;
