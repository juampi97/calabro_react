import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-around">
        <div className="col-9 d-flex flex-row flex-wrap justify-content-center">
          {productos.map((producto) => {
            return (
              <Item
                key={producto.cod_rec}
                cod_rec={producto.cod_rec}
                marca={producto.marca}
                modelo={producto.modelo}
                vga={producto.vga}
                hdmi={producto.hdmi}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default React.memo(ItemList);
