import React from "react";

// Import components propios
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  const stock = 10;

  return (
    <>
      <div>
        <h3 className="text-center pt-3">{greeting}</h3>

        <div className="container-fluid d-flex align-items-center justify-content-around my-4">
          <div className="col-2 align-items-center justify-content-around py-1 border border-2 border-secondary-subtle rounded d-flex flex-row">
            <ItemCount stock={stock} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
