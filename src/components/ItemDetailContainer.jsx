import React from "react";
// Import Hook de react-router-dom
import { useParams } from "react-router-dom";
// Import Hook
import { useState, useEffect } from "react";
// Import componentes propios
import SpinnerLoad from "./SpinnerLoad";
import ItemDetail from "./ItemDetail";
// Import firebase
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  // Obtengo el parametro de la url
  const { id } = useParams();
  console.log(id);

  const [productosLoaded, setProductosLoaded] = useState(false);

  const [producto, setProducto] = useState([]);

  useEffect(() => { 
    const db = getFirestore();

    const Item = doc(db, "productos", "6ZLqJgTKV4pkSdYMRyOY");

    getDoc(Item).then((snapshot) => {
      if(snapshot.exists()){
        const docs = snapshot.data();
        setProducto(docs);
        setProductosLoaded(true);
      }
    });
  }, []);  

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
                key={producto.id}
                cod_rec={producto.cod_rec}
                marca={producto.marca}
                modelo={producto.modelo}
                vga={producto.vga}
                hdmi={producto.hdmi}
                precio={producto.precio}
                id={producto.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
