import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div>
        <h3 className="text-center pt-3">{greeting}</h3>

        <div className="container-fluid d-flex align-items-center justify-content-around my-4">
          <div className="col-2 py-2 border border-2 border-primary rounded-pill">
            <ItemCount />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
