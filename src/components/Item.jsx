import React from "react";
// Import hooks react
import { useState, useContext } from "react";
// Import context
import { CounterCartContext } from "../context/CartContext";
// Import Link de react-router-dom
import { Link } from "react-router-dom";
// Import components Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemsAditionals from "./ItemsAditionals";

const Item = ({ cod_rec, marca, modelo, vga, hdmi }) => {
 
  const { addItem } = useContext(CounterCartContext);
  const cantidad = 1;

  const statesCheckboxes = (state) => {
     console.log(state);
  };
 
  return (
    <>
      <div className="col-10 col-lg-3 d-flex m-1 item_card">
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{cod_rec}</Card.Title>
            <Card.Text>Marca: {marca}</Card.Text>
            <Card.Text>Modelo: {modelo}</Card.Text>

            <ItemsAditionals statesCheckboxes={statesCheckboxes} />
           
            <div className="container-fluid d-flex justify-items-around align-items-center">
              <div className="mx-3">
                <Link to={`/producto/${cod_rec}`}>
                  <Button variant="secondary">Ver mas</Button>
                </Link>
              </div>
              <div className="mx-3">
                <Button onClick={() => addItem(cod_rec,cantidad)} variant="success">Agregar</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Item;
