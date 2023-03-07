import React from "react";

const Cart = () => {
  const noVocals = (e) => {
    const letra = e.key;
    const entrada = letra.toUpperCase();

    console.log(e.target.value);
    console.log(e);

    // if (
    //   entrada === "A" ||
    //   entrada === "E" ||
    //   entrada === "I" ||
    //   entrada === "O" ||
    //   entrada === "U"
    // ) {
    //   e.preventDefault();
    // } else{
    //   console.log(letra);
    // }
  };

  return (
    <div>
      <input type="text" onKeyDown={noVocals} placeholder="Texto" />
    </div>
  );
};

export default Cart;
