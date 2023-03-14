import React from "react";
// Import Hook de react-router-dom
import { useParams } from "react-router-dom";
// Import Hook
import { useState, useEffect } from "react";
// Import componentes propios
import SpinnerLoad from "./SpinnerLoad";
import ItemDetail from "./ItemDetail";
//Import json
import Data from "../data.json";

const ItemDetailContainer = () => {
  const [productosLoaded, setProductosLoaded] = useState(false);

  // Obtengo el parametro "cod_rec" de la url
  const { cod_rec } = useParams();

  // Busqueda de prductos
  const getProduct = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay productos"));
      }
      setTimeout(() => {
        resolve(Data);
        setProductosLoaded(true);
      }, 2000);
    });
  };

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    getProduct().then((data) => setProducto(data));
    getProduct().catch((error) => console.log(error));
  }, []);

  // Filtrado de productos por cod_rec
  const productoFiltrado = producto.filter(
    (producto) => producto.cod_rec === cod_rec
  );

  if(!productosLoaded){
    return <SpinnerLoad />
  }

  return (
    <>
      <div className="container-fluid d-flex justify-content-around detail-container my-3">
        <div className="col-11 d-flex flex-column flex-lg-row align-items-center justify-content-around">
          {productoFiltrado.map((producto) => {
            return (
              <ItemDetail
                key={producto.cod_rec}
                cod_rec={producto.cod_rec}
                marca={producto.marca}
                modelo={producto.modelo}
                hdmi={producto.hdmi}
                vga={producto.vga}
                stock={producto.stock}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
