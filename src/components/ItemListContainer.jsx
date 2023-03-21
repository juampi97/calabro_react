import React from "react";
// Import Hooks
import { useState, useEffect } from "react";
//Import Hooks de react-router-dom
import { useParams } from "react-router-dom";
// Import components propios
import ItemList from "./ItemList";
import SpinnerLoad from "./SpinnerLoad";
//Import firebase
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {

  const [productosLoaded, setProductosLoaded] = useState(false);

  // Obtengo el parametro "categoria" de la url
  const { categoria } = useParams();

  // Busqueda de productos
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "productos");
    getDocs(itemCollection).then((snapshot) => {
      setProductos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setProductosLoaded(true);
    }
    );
  }, []);

  // Filtrado de productos por categoria
  const productosFiltrados = productos.filter(
    (producto) => producto.categoria === categoria
  );

  if (!productosLoaded) {
    return <SpinnerLoad />;
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
