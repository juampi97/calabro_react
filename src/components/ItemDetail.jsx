import React from "react";
// Import components
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {

  const salidaHdmi = producto.hdmi ? "Disponible" : "No disponible";
  const salidaVga = producto.vga ? "Disponible" : "No disponible";

  return (
    <>
      {/* Imagen producto segun prop */}
      <div className="col-10 col-lg-5 d-flex flex-column align-items-center justify-content-center mb-4 mb-lg-0">
        <img
          src={`${producto.idImg}`}
          alt="Imagen producto"
          className="img-fluid"
        />
      </div>
      {/* Detalle producto */}
      <div className="col-11 col-lg-4 d-flex flex-column align-items-center justify-content-start p-3 border border-2 border-light-subtle rounded-3">
        <h1 className="mt-2 mt-lg-2 mb-2 mb-lg-0 text-center">{producto.modelo}</h1>
        <h4 className="mt-1 mt-lg-3 mb-2 mb-lg-0"> {producto.marca}</h4>
        <p className="mt-1 mt-lg-3 mb-2 mb-lg-0">Salida HDMI: {salidaHdmi}</p>
        <p className="mt-1 mt-lg-2 mb-2 mb-lg-2">Salida Vga: {salidaVga}</p>
        <p className="mt-1 mt-lg-2 mb-2 mb-lg-2">Precio: ${producto.precio}</p>  
        <ItemCount cod_rec={producto.cod_rec} marca={producto.marca} modelo={producto.modelo} stock={producto.stock} precio={producto.precio} />
      </div>
    </>
  );
};

export default ItemDetail;
