import React from "react";
// Import bootstrap elements
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const ListProducts = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-around my-5">
        <div className="col-5">
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li" className="d-flex align-items-start">
              <div className="col-11 ms-2">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <div className="col-1 pt-2 mt-1">
                <Badge bg="primary" pill>
                  14
                </Badge>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
