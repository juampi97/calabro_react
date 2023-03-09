import React from "react";

// Import hook
import { useState } from "react";
import { useParams } from "react-router-dom";
// Import components bootstrap
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock }) => {

  const { cod_rec } = useParams();

  const cantidadInicial = 1;
  const [cantidad, setCantidad] = useState(cantidadInicial);

  const onAddQty = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : setCantidad(cantidad);
  };
  const onRestarQty = () => {
    cantidad > cantidadInicial
      ? setCantidad(cantidad - 1)
      : setCantidad(cantidad);
  };
  const onAddCart = () => {
    console.log(`Se agregaron ${cantidad} unidades al carrito del producto ${cod_rec}`);
  };

  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-around col-10 col-md-5 col-lg-9 my-lg-3 p-2 border border-2 border-light-subtle rounded-3">
        <Button
          variant="outline-light"
          className="d-flex align-items-center justify-content-around text-dark"
          onClick={onRestarQty}
        >
          <span className="material-symbols-outlined">horizontal_rule</span>
        </Button>
        <div className="col-6 d-flex justify-content-around">{cantidad}</div>
        <Button
          variant="outline-light"
          className="d-flex align-items-center justify-content-around text-dark"
          onClick={onAddQty}
        >
          <span className="material-symbols-outlined">add</span>
        </Button>
      </div>
      <div className="pt-2">
        <Button onClick={onAddCart} className="py-2 p-3" variant="warning">
          Agregar
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
