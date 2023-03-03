import React from "react";
// Import Link de react-router-dom
import { Link } from "react-router-dom";
// Import components Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ cod_rec, marca, modelo }) => {
  return (
    <>
      <div className=" col-3 d-flex m-1">
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{cod_rec}</Card.Title>
            <Card.Text>Marca: {marca}</Card.Text>
            <Card.Text>Modelo: {modelo}</Card.Text>
            <Link to={`/producto/${cod_rec}`}>
              <Button variant="secondary">Ver mas</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Item;
