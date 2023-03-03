import React from "react";

<<<<<<< HEAD
=======
// Import react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

>>>>>>> work_mod
// Import Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Import components propios
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

const App = () => {
<<<<<<< HEAD

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a UNLaM - ecomerce"} />
=======
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productos" element={<ItemListContainer />} />
          <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route exact path="/producto/:cod_rec" element={<ItemDetailContainer />} />
          <Route exact path="/carrito" element={<Cart />} />
        </Routes>
      </BrowserRouter>
>>>>>>> work_mod
    </>
  );
};

export default App;
