import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div>
        <h3 className="text-center pt-3">{greeting}</h3>
      </div>
      <div className="container'fluid">
        <div className="col-6">
          <ItemCount />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
