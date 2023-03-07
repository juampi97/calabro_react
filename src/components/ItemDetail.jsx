import React from "react";
// Import Bootstrap components
import Button from "react-bootstrap/Button";
// Import components
import ItemCount from "./ItemCount";

const ItemDetail = ({ cod_rec, marca, modelo, hdmi, vga, stock }) => {

  const salidaHdmi = hdmi ? "Disponible" : "No disponible";
  const salidaVga = vga ? "Disponible" : "No disponible";

  const idImg = marca.toLowerCase();

  return (
    <>
      {/* Imagen producto segun prop */}
      <div className="col-10 col-lg-5 d-flex flex-column align-items-center justify-content-center mb-4 mb-lg-0">
        <img  src={ `/productos/${idImg}.jpg` } alt="Imagen producto" className="img-fluid" />
      </div>
      {/* Detalle producto */}
      <div className="col-11 col-lg-4 d-flex flex-column align-items-center justify-content-start p-3 border border-2 border-light-subtle rounded-3">
        <h1 className="mt-2 mt-lg-2 mb-2 mb-lg-0 text-center">{modelo}</h1>
        <h4 className="mt-1 mt-lg-3 mb-2 mb-lg-0"> {marca}</h4>
        <p className="mt-1 mt-lg-3 mb-2 mb-lg-0">Salida HDMI: {salidaHdmi}</p>
        <p className="mt-1 mt-lg-2 mb-2 mb-lg-2">Salida Vga: {salidaVga}</p>
        <div className="d-flex flex-row align-items-center justify-content-around col-10 col-md-8 my-lg-3 p-2 border border-2 border-light-subtle rounded-3">
          <ItemCount stock={stock} />
        </div>
        <div className="pt-2">
          <Button className="py-2 p-3" variant="warning">
            Agregar
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
