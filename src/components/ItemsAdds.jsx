import React from "react";
// Import componentes bootstrap
import Form from "react-bootstrap/Form";

const ItemsAdds = ( {cod_rec} ) => {
  return (
    <div className="my-3">
      <p>El maletín incluye alimentación, cabla VGA y zapatilla multitoma.</p>
      <Form>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
            className="pb-2"
              type={type}
              id={`hdmiAdicional_${cod_rec}`}
              label={`HDMI (opcional)`}
            />
            <Form.Check
              type={type}
              id={`vgaAdicional_${cod_rec}`}
              label={`Zapatilla adicional (opcional)`}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default ItemsAdds;
