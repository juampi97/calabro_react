import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div>
        <h3 className="text-center pt-3">{greeting}</h3>
      </div>
    </>
  );



  return <>{categoria ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />}</>;
};

export default ItemListContainer;
