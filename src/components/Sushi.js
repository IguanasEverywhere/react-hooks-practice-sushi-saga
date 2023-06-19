import React, { useState } from "react";

function Sushi({ sushi, eatSushi, moneyRemaining }) {

  const {img_url, price, name, id} = sushi

  const [isUneaten, setIsUneaten] = useState(false);

  function handleSushiClick() {
    eatSushi(sushi);
    setIsUneaten(true)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => !isUneaten && price <= moneyRemaining ? handleSushiClick() : null}>
        {/* Tell me if this sushi has been eaten! */}
        {isUneaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price} ID: {id}
      </h4>
    </div>
  );
}

export default Sushi;
