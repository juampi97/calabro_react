import React from "react";

// Import hook
import { useState } from "react";

// Import components bootstrap
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock }) => {
  const cantidadInicial = 1;
  const [cantidad, setCantidad] = useState(cantidadInicial);

  const onAdd = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const onRestar = () => {
    if (cantidad > cantidadInicial) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <>
      <Button
        variant="outline-light"
        className="d-flex align-items-center justify-content-around text-dark"
        onClick={onRestar}
      >
        <span class="material-symbols-outlined">horizontal_rule</span>
      </Button>
      <div className="col-6 d-flex justify-content-around">{cantidad}</div>
      <Button
        variant="outline-light"
        className="d-flex align-items-center justify-content-around text-dark"
        onClick={onAdd}
      >
        <span class="material-symbols-outlined">add</span>
      </Button>
    </>
  );
};

export default ItemCount;
