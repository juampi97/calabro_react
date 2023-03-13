import React from "react";

import { createContext ,useState } from "react";

export const CounterCartContext = createContext(null);

const CartContext = ( { children } ) => {

  let hdmiAdicional = 0;
  let vgaAdicional = 0;

  const [cart, setCart] = useState([]);
  const [totalProductos, setTotalProductos] = useState(0);

  const addItem = (cod_rec, cantidad, hdmiAditionalState, vgaAditionalState) => {
    const position = cart.findIndex((item) => item.cod_rec === cod_rec);
    if (position === -1){
        const item = {
            cod_rec: cod_rec,
            cantidad: cantidad,
        };
        setTotalProductos(totalProductos + cantidad);
        setCart([...cart, item]);
        
    } else {
        cart[position].cantidad += cantidad;
        setTotalProductos(totalProductos + cantidad);
        setCart([...cart]);
    }
    hdmiAditionalState ? hdmiAdicional += 1 : hdmiAdicional += 0;
    vgaAditionalState ? vgaAdicional += 1 : vgaAdicional += 0;
    console.log(hdmiAdicional, vgaAdicional);
  }

  const removeItem = (cod_rec) => {
    const position = cart.findIndex((item) => item.cod_rec === cod_rec);
    if (position !== -1) {
      const restarCantidad = cart[position].cantidad;
      setTotalProductos(totalProductos - restarCantidad);
      cart.splice(position, 1);
      setCart([...cart]);
    }  
  }

  const resetCart = () => {
    setCart([]);
    setTotalProductos(0);
  }

  return (
  <CounterCartContext.Provider value={{cart, totalProductos, hdmiAdicional, vgaAdicional, addItem, removeItem, resetCart}}>{children}</CounterCartContext.Provider>
  );
};

export default CartContext;
