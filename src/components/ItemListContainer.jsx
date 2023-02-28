import React from "react";

// Import components propios
import ItemList from "./ItemList";

// Importa json
import Data from "../data.json";

const ItemListContainer = ({ greeting }) => {

  return (
    <>
      <ItemList productos={Data} />
    </>
  );
};

export default ItemListContainer;
