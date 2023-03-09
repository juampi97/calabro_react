import React from "react";

import { createContext ,useState } from "react";

export const CounterCartContext = createContext(null);

const CartContext = ( { children } ) => {
  const [cart, setCart] = useState([]);

  const addItem = (cod_rec, cantidad) => {
    const position = cart.findIndex((item) => item.cod_rec === cod_rec);
    if (position === -1){
        const item = {
            cod_rec: cod_rec,
            cantidad: cantidad,
        };
        setCart([...cart, item]);
        
    } else {
        cart[position].cantidad += cantidad;
        setCart([...cart]);
    }

  }

  const removeItem = (cod_rec) => {
    const position = cart.findIndex((item) => item.cod_rec === cod_rec);
    if (position !== -1) {
      cart.splice(position, 1);
      setCart([...cart]);
    }  
  }

  const resetCart = () => {
    setCart([]);
  }

  return (
  <CounterCartContext.Provider value={{cart, addItem, removeItem, resetCart}}>{children}</CounterCartContext.Provider>
  );
};

export default CartContext;
