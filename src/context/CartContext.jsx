import React from "react";

import { createContext, useState } from "react";

export const CounterCartContext = createContext(null);

const CartContext = ({ children }) => {
  const [hdmiAdicional, setHdmiAdicional] = useState(0);
  const [vgaAdicional, setVgaAdicional] = useState(0);

  const [cart, setCart] = useState([]);
  const [totalProductos, setTotalProductos] = useState(0);

  const addItem = (
    cod_rec,
    cantidad,
    hdmiAditionalState,
    vgaAditionalState
  ) => {
    const position = cart.findIndex((item) => item.cod_rec === cod_rec);
    if (position === -1) {
      const item = {
        cod_rec: cod_rec,
        cantidad: cantidad,
      };
      if (hdmiAditionalState === true && vgaAditionalState === true) {
        setTotalProductos(totalProductos + cantidad + 1 + 1);
        setCart([...cart, item]);
      } else if (hdmiAditionalState === true) {
        setTotalProductos(totalProductos + cantidad + 1);
        setCart([...cart, item]);
      } else if (vgaAditionalState === true) {
        setTotalProductos(totalProductos + cantidad + 1);
        setCart([...cart, item]);
      } else {
        setTotalProductos(totalProductos + cantidad);
        setCart([...cart, item]);
      }
    } else {
      cart[position].cantidad += cantidad;

      if (hdmiAditionalState === true && vgaAditionalState === true) {
        setTotalProductos(totalProductos + cantidad + 1 + 1);
        setCart([...cart]);
      } else if (hdmiAditionalState === true) {
        setTotalProductos(totalProductos + cantidad + 1);
        setCart([...cart]);
      } else if (vgaAditionalState === true) {
        setTotalProductos(totalProductos + cantidad + 1);
        setCart([...cart]);
      } else {
        setTotalProductos(totalProductos + cantidad);
        setCart([...cart]);
      }
    }
    if (hdmiAditionalState === true) {
      setHdmiAdicional(hdmiAdicional + 1);
    }
    if (vgaAditionalState === true) {
      setVgaAdicional(vgaAdicional + 1);
    }
  };

  const removeHdmi = () => {
    setTotalProductos(totalProductos - hdmiAdicional);
    setHdmiAdicional(0);
  };

  const removeVga = () => {
    setTotalProductos(totalProductos - vgaAdicional);
    setVgaAdicional(0);
  };

  const removeItem = (cod_rec) => {
    const position = cart.findIndex((item) => item.cod_rec === cod_rec);
    if (position !== -1) {
      const restarCantidad = cart[position].cantidad;
      setTotalProductos(totalProductos - restarCantidad);
      cart.splice(position, 1);
      setCart([...cart]);
    }
  };

  const resetCart = () => {
    setCart([]);
    setTotalProductos(0);
    setHdmiAdicional(0);
    setVgaAdicional(0);
  };

  return (
    <CounterCartContext.Provider
      value={{
        cart,
        totalProductos,
        hdmiAdicional,
        vgaAdicional,
        addItem,
        removeItem,
        removeHdmi,
        removeVga,
        resetCart,
      }}
    >
      {children}
    </CounterCartContext.Provider>
  );
};

export default CartContext;
