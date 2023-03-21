import React from "react";
// Import context
import { CounterCartContext } from "../context/CartContext";
// Firestore
import { collection, addDoc, getFirestore } from "firebase/firestore";
// Import hooks react
import { useState, useContext } from "react";
// Import component react-bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// Import sweetalert2
import Swal from "sweetalert2";

const Formulario = () => {
  const { cart, totalPrecio, orderId, setOrderId } =
    useContext(CounterCartContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [telefono, setTelefono] = useState("");

  const db = getFirestore();

  const onName = (e) => {
    setNombre(e.target.value);
  };

  const onMail = (e) => {
    setEmail(e.target.value);
  };

  const onMailConfirm = (e) => {
    setEmailConfirm(e.target.value);
  };

  const onTelefono = (e) => {
    setTelefono(e.target.value);
  };

  const sendForm = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      email === "" ||
      emailConfirm === "" ||
      telefono === ""
    ) {
      Swal.fire("Atencion", "Debe completar todos los campos", "warning");
      return;
    } else if (email !== emailConfirm) {
      Swal.fire("Atencion", "Los emails no coinciden", "error");
      return;
    } else {
      addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
    }
  };

  const items = cart.map((producto) => {
    return {
      cod_rec: producto.cod_rec,
      marca: producto.marca,
      modelo: producto.modelo,
      precio_unidad: producto.precio,
      cantidad: producto.cantidad,
    };
  });

  const estado = "generada";

  const date = new Date();
  const fecha =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  const order = {
    nombre,
    email,
    telefono,
    items,
    total: totalPrecio,
    fecha,
    estado,
  };

  const orderCollection = collection(db, "orders");

  return (
    <>
      <form onSubmit={sendForm}>
        <div className="container-fluid d-flex flex-column align-items-center my-5">
          <div className="col-10 col-lg-5">
            <FloatingLabel controlId="nombre" label="Nombre">
              <Form.Control type="text" onKeyUp={onName} placeholder="Nombre" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mt-3"
            >
              <Form.Control
                type="email"
                onKeyUp={onMail}
                placeholder="nombre@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Repetir email"
              className="mt-3"
            >
              <Form.Control
                type="email2"
                onKeyUp={onMailConfirm}
                placeholder="nombre@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Telefono"
              className="mt-3"
            >
              <Form.Control
                type="telefono"
                onKeyUp={onTelefono}
                placeholder="11-1111-1111"
              />
            </FloatingLabel>
          </div>
          <div className="pt-4">
            <Button type="submit" className="py-2 p-3" variant="warning">
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Formulario;
