import React from 'react';

// Import Hook
import {useState, useEffect} from 'react';

// Import componentes propios
import ItemDetail from './ItemDetail';

//Import json
import Data from '../data.json';

const ItemDetailContainer = () => {

const getProduct = () => {
    return new Promise((resolve, reject) => {
        if(Data.length === 0){
            reject(new Error('No hay productos'));
        }
        setTimeout(() => {
            resolve(Data);
        }, 2000);
    });
};

const [producto, setProducto] = useState([]);

useEffect(() => {
    getProduct().then((data) => setProducto(data));
    getProduct().catch((error) => console.log(error));
}, []);

  return (
    <>
    <ItemDetail producto={producto}/>
    </>
  )
}

export default ItemDetailContainer