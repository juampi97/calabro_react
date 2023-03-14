import React from "react";
// Import Hooks
import { useState, useEffect } from "react";
//Import Hooks de react-router-dom
import { useParams } from "react-router-dom";
// Import components propios
import ItemList from "./ItemList";
import SpinnerLoad from "./SpinnerLoad";
// Importa json
import Data from "../data.json";

const ItemListContainer = () => {
  const [productosLoaded, setProductosLoaded] = useState(false);
  

  // Obtengo el parametro "categoria" de la url
  const { categoria } = useParams();

  // Busqueda de prductos
  const getData = () => {
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

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getData().then((data) => setProductos(data));
    getData().catch((error) => console.log(error));
  }, []);

  // Filtrado de productos por categoria
  const productosFiltrados = productos.filter(
    (producto) => producto.categoria === categoria
  );

  if(!productosLoaded){
    return <SpinnerLoad />
  }

  return (
    <>
      {categoria ? (
        <ItemList productos={productosFiltrados} />
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};

export default ItemListContainer;
