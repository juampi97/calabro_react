import React from "react";

// Import Hooks
import { useState } from "react";

// Import Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Import components propios
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

// Import css
import './styles.css'

const App = () => {

  const initialCantidad = 1;
  const [cantidad, setCantidad] = useState(initialCantidad);

  const restarCantidad = () => {
    if(cantidad > 1) {
      setCantidad(cantidad - 1);
      console.log(cantidad);
    }
  }

  const sumarCantidad = () => {
    setCantidad(cantidad + 1);
  }

  const resetCantidad = () => {
    setCantidad(initialCantidad);
    console.log(cantidad);
  }

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a UNLaM - ecomerce"} />
      <button onClick={restarCantidad}>-</button>
      <button onClick={sumarCantidad}>+</button>
      <button onClick={resetCantidad}>Reset</button>
      <h2>{cantidad}</h2>
    </>
  );
};

export default App;
