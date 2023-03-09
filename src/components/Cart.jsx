import React from "react";
// Import hooks react
import { useContext } from "react";
// Import context
import { CounterCartContext } from "../context/CartContext";
// Import componentes propios
import Formulario from "./Formulario";
import ListProducts from "./ListProducts";
import ResetCarrito from "./ResetCarrito";

const Cart = () => {
  const { cart } = useContext(CounterCartContext);

  return (
    <>
    <div className="container-fluid d-flex flex-column align-items-center my-5">
    {cart.map((producto) => {
      return (
        <ListProducts
        key={producto.cod_rec}
        cod_rec={producto.cod_rec}
        cantidad={producto.cantidad}
        />
        );
      })}
      </div>
      <ResetCarrito />
      <Formulario />
    </>
  );
};

export default Cart;
