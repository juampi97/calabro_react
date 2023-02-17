import React from "react";

// Import Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Import components propios
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a UNLaM - ecomerce"} />
    </>
  );
};

export default App;
