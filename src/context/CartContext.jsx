import React from "react";

import { createContext ,useState } from "react";

export const CounterCartContext = createContext(null);

const CartContext = ( { children } ) => {
  const [cart, setCart] = useState([]);

  const addItem = (cod_rec, cantidad) => {
    const item = {
      cod_rec: cod_rec,
      cantidad: cantidad,
    };
    setCart([...cart, item]);
    console.log(cart);
  }

  const removeItem = () => {

  }

  const resetCart = () => {
    setCart([]);
  }

  return (
  <CounterCartContext.Provider value={{cart, addItem, removeItem, resetCart}}>{children}</CounterCartContext.Provider>
  );
};

export default CartContext;
