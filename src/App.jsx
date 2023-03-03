import React from "react";

// Import react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Import components propios
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productos" element={<ItemListContainer />} />
          <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
          <Route exact path="/carrito" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
