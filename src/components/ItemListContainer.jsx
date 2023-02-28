import React from "react";

// Import Hooks
import { useState, useEffect } from "react";

// Import components propios
import ItemList from "./ItemList";

// Importa json
import Data from "../data.json";

const ItemListContainer = ({ greeting }) => {
  // const fechData = async () => {
  //   const response = await fetch('../data.json');
  //   const data = await response.json();
  //   return data;
  // };

  // const [productos,setProductos] = useState([]);

  // useEffect(() => {
  //   fechData().then((data) => setProductos(data));
  // }, []);

  const getData = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay productos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  const [productos, setProductos] = useState([]);

  useEffect(() => {
  getData().then((data) => setProductos(data));
  getData().catch((error) => console.log(error));
  },[]);

  return <>{ <ItemList productos={productos} /> }</>;
};

export default ItemListContainer;
