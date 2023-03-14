import React from "react";

import { createContext ,useState } from "react";

export const CounterCartContext = createContext(null);

const CartContext = ( { children } ) => {
  const [cart, setCart] = useState([]);
  const [totalProductos, setTotalProductos] = useState(0);
  const [totalPrecio, setTotalPrecio] = useState(0);

  const addItem = (cod_rec, cantidad, precio) => {
    const position = cart.findIndex((item) => item.cod_rec === cod_rec);
    if (position === -1){
        const item = {
            cod_rec: cod_rec,
            cantidad: cantidad,
            precio: precio,
            precioTotal: cantidad * precio
        };
        setTotalProductos(totalProductos + cantidad);
        setTotalPrecio(totalPrecio + (cantidad * precio));
        setCart([...cart, item]);
        
    } else {
        cart[position].cantidad += cantidad;
        setTotalProductos(totalProductos + cantidad);
        setTotalPrecio(totalPrecio + (cantidad * precio));
        setCart([...cart]);
      }
  }

  
  const removeItem = (cod_rec) => {
    const position = cart.findIndex((item) => item.cod_rec === cod_rec);
    if (position !== -1) {
      const restarCantidad = cart[position].cantidad;
      setTotalProductos(totalProductos - restarCantidad);
      setTotalPrecio(totalPrecio - (restarCantidad * cart[position].precio));
      cart.splice(position, 1);
      setCart([...cart]);
    }  
  }

  const resetCart = () => {
    setCart([]);
    setTotalProductos(0);
    setTotalPrecio(0)
  }

  return (
  <CounterCartContext.Provider value={{cart, totalProductos, totalPrecio, addItem, removeItem, resetCart}}>{children}</CounterCartContext.Provider>
  );
};

export default CartContext;
