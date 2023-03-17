import React from "react";
// Import Hook de react-router-dom
import { useParams } from "react-router-dom";
// Import Hook
import { useState, useEffect } from "react";
// Import componentes propios
import SpinnerLoad from "./SpinnerLoad";
import ItemDetail from "./ItemDetail";
// Import firebase
import { collection, query, where, doc, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  // Obtengo el parametro de la url
  const { cod_rec } = useParams();

  const [productosLoaded, setProductosLoaded] = useState(false);

  const [producto, setProducto] = useState([]);

  useEffect(() => { 
    const db = getFirestore();

    const q = query(collection(db,"productos"), where("cod_rec", "==", cod_rec));

    getDocs(q).then((snapshot) => {
      if(snapshot.size !== 0){
        setProducto(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
        setProductosLoaded(true);
      }
    });
  }, []);  
  console.log(producto);



  if(!productosLoaded){
    return <SpinnerLoad />
  }



  return (
    <>
      <div className="container-fluid d-flex justify-content-around detail-container my-3">
        <div className="col-11 d-flex flex-column flex-lg-row align-items-center justify-content-around">
        {producto.map((producto) => {
          return (
            <ItemDetail
              key={producto.cod_rec}
              cod_rec={producto.cod_rec}
              marca={producto.marca}
              modelo={producto.modelo}
              hdmi={producto.hdmi}
              vga={producto.vga}
              stock={producto.stock}
              precio={producto.precio}
            />
          );
        })}
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
