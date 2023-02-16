import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div>
        <h3 className="text-center pt-3">{greeting}</h3>
      </div>
      <div className="">
        <ItemCount />
      </div>
    </>
  );
};

export default ItemListContainer;
