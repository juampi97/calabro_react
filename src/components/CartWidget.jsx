import React from "react";

// Import components from react-bootstrap
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const CartWidget = () => {
  return (
    <>
      <Button className="ms-2" variant="warning">
        <span className="material-symbols-outlined">shopping_cart</span>
        <Badge bg="danger">
          3
        </Badge>
        <span className="visually-hidden">Productos carrito</span>
      </Button>
    </>
  );
};

export default CartWidget;
