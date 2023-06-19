import React, { useState } from "react";

function Sushi({ sushi, eatSushi, moneyRemaining }) {

  const {img_url, price, name, id, eaten} = sushi

  const [isEaten, setIsEaten] = useState(eaten === true ? true :false);

  console.log('EATEN', eaten);

  function handleSushiClick() {
    eatSushi(sushi);
    setIsEaten(true)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => !isEaten && price <= moneyRemaining ? handleSushiClick() : null}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
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
