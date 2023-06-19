import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer({ allSushi, eatSushi, moneyRemaining }) {

  const [startingID, setStartingID] = useState(1);

  const filteredSushi = allSushi.filter((sushi) => sushi.id >= startingID && sushi.id < (startingID + 4));
  const nextFourSushi = filteredSushi.map((sushi) =>
    // <Sushi
    //   key={sushi.id}
    //   name={sushi.name}
    //   image={sushi.img_url}
    //   price={sushi.price}
    //   eatSushi={eatSushi}
    //   moneyRemaining={moneyRemaining}
    // />);
    <Sushi
      key={sushi.id}
      sushi={sushi}
      eatSushi={eatSushi}
      moneyRemaining={moneyRemaining}
    />);

  function getNextFourSushi() {
    setStartingID((prevID) => prevID + 4);
  }

  return (
    <div className="belt">
      {nextFourSushi}
      <MoreButton getNextFourSushi={getNextFourSushi} />
    </div>
  );
}

export default SushiContainer;
