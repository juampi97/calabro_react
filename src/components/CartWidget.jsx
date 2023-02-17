import React from "react";

// Import components from react-bootstrap
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const CartWidget = () => {
  return (
    <>
      <Button className="d-flex align-items-center justify-content-around ms-2 " variant="success">
        <span className="material-symbols-outlined me-1">shopping_cart</span>
        <Badge bg="warning">
          3
        </Badge>
        <span className="visually-hidden">Productos carrito</span>
      </Button>
    </>
  );
};

export default CartWidget;
