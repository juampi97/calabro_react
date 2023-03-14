import React from "react";
// Import context
import { CounterCartContext } from "../context/CartContext";
// Import hook
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
// Import components bootstrap
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, precio }) => {
  const { cart, addItem } = useContext(CounterCartContext);

  const { cod_rec } = useParams();

  const cantidadInicial = 1;

  const [cantidad, setCantidad] = useState(cantidadInicial);

  const position = cart.findIndex((producto) => producto.cod_rec === cod_rec);
  if (position !== -1) {
    stock = stock - cart[position].cantidad;
    if (stock === 0) {
      return (
        <div className="d-flex flex-row align-items-center justify-content-around col-10 col-md-5 col-lg-9 my-lg-3 p-2 border border-2 border-light-subtle rounded-3">
          <div className="col-10 text-center">Sin mas stock disponible</div>
        </div>
      );
    }
  }

  const onAddQty = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : setCantidad(cantidad);
  };
  const onRestarQty = () => {
    cantidad > cantidadInicial
      ? setCantidad(cantidad - 1)
      : setCantidad(cantidad);
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
        <Button
          onClick={() => addItem(cod_rec, cantidad, precio)}
          className="py-2 p-3"
          variant="warning"
        >
          Agregar
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
