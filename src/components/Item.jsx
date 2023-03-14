import React from "react";
// Import hooks react
import { useContext } from "react";
// Import context
import { CounterCartContext } from "../context/CartContext";
// Import Link de react-router-dom
import { Link } from "react-router-dom";
// Import components Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemsAditionals from "./ItemsAditionals";

const Item = ({ cod_rec, marca, modelo, vga, hdmi, precio }) => {
  const { cart, addItem } = useContext(CounterCartContext);
  const cantidad = 1;

  return (
    <>
      <div className="col-10 col-lg-3 d-flex m-1">
        <Card>
          <div className="item_card">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>{cod_rec}</Card.Title>
              <Card.Text>Marca: {marca}</Card.Text>
              <Card.Text>Modelo: {modelo}</Card.Text>
              <Card.Text>Precio: ${precio}</Card.Text>
              <Link to={`/producto/${cod_rec}`}>
                <Button variant="secondary">Ver mas</Button>
              </Link>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Item;
