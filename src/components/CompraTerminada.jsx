import React from "react";
// Import context
import { CounterCartContext } from "../context/CartContext";
// Import hooks react
import { useContext } from "react";
// Import react-bootstrap
import Button from "react-bootstrap/Button";

const CompraTerminada = () => {
  const { orderId, resetCart, setOrderId } = useContext(CounterCartContext);

const seguirComprando = () => {
    resetCart();
    setOrderId(null);
}

  return (
    <>
      <div className="constainer mt-5">
        <h1 className="text-center">Muchas gracias por su compra</h1>
        <p className="text-center">Su orden de compra es: {orderId}</p>
        <div className="d-flex justify-content-around">
          <Button onClick={seguirComprando} variant="warning">Seguir comprando</Button>
        </div>
      </div>
    </>
  );
};

export default CompraTerminada;
