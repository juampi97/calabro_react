import React from "react";
// Import hook react
import { useState } from "react";

const ItemsAditionals = ({hdmi}) => {

  console.log(hdmi);


  const [isCheckedHDMI, setIsCheckedHDMI] = useState(false);

  const handleChangeHDMI = (event) => {
    setIsCheckedHDMI(event.target.checked);
    
  };
  const [isCheckedVGA, setIsCheckedVGA] = useState(false);

  const handleChangeVGA = (event) => {
    setIsCheckedVGA(event.target.checked);
    
  };

  return (
    <div className="my-3">
      <p>El maletín incluye alimentación, cabla VGA y zapatilla multitoma.</p>
      <div>
        <input  type="checkbox" checked={isCheckedHDMI} onChange={handleChangeHDMI} />
        <label className="px-2 pb-1">HDMI (opcional)</label>
      </div>
      <div>
        <input type="checkbox" checked={isCheckedVGA} onChange={handleChangeVGA} />
        <label className="px-2">VGA (opcional)</label>
      </div>
    </div>
  );
};

export default ItemsAditionals;
