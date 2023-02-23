import React from "react";

// Import Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Import components propios
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

// Import json
import Data from "./data.json"

const App = () => {

  // fetch data from json with timeout
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      if(Data.length === 0) {
        reject(new Error("No hay productos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 3000);
    });
  };

  async function fetchData() {
    try {
      const datosFetched = await getProducts();
      console.log(datosFetched);
    } catch (error) {
      console.log(error);
    }
  }

  fetchData();

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a UNLaM - ecomerce"} />

      {Data.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.stock}</p>
          </div>
        )})}

    </>
  );
};

export default App;
