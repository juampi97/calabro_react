import React from "react";
// Import hook react
import { useState } from "react";

const ItemsAditionals = (props) => {
  const [hdmiAditionalState, sethdmiAditionalState] = useState(false);
  const [vgaAditionalState, setvgaAditionalState] = useState(false);

  function handlehdmiAditionalStateChange() {
    sethdmiAditionalState(!hdmiAditionalState);
    props.enviarCheckbox(!hdmiAditionalState, vgaAditionalState);
  }

  function handlevgaAditionalStateChange() {
    setvgaAditionalState(!vgaAditionalState);
    props.enviarCheckbox(hdmiAditionalState, !vgaAditionalState);
  }

  return (
    <div className="my-3 d-flex flex-column">
      <p>El maletín incluye alimentación, cabla VGA y zapatilla multitoma.</p>
      <div>
        <label className="mb-2">
          <input
            type="checkbox"
            checked={hdmiAditionalState}
            onChange={handlehdmiAditionalStateChange}
            />
            <span className="ps-2">VGA - OPCIONAL</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={vgaAditionalState}
            onChange={handlevgaAditionalStateChange}
            />
            <span className="ps-2">VGA - OPCIONAL</span>
        </label>
      </div>
    </div>
  );
};

export default ItemsAditionals;
