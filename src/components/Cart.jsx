import React from "react";
// Import hooks react
import { useContext } from "react";
// Import context
import { CounterCartContext } from "../context/CartContext";
// Import componentes propios
import Formulario from "./Formulario";
import ListProducts from "./ListProducts";

const Cart = () => {
  const { cart, removeItem, resetCart } = useContext(CounterCartContext);
  console.log(cart);

  return (
    <>
      <ListProducts />
      <Formulario />
    </>
  );
};

export default Cart;
