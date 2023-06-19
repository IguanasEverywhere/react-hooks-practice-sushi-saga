import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [allSushi, setAllSushi] = useState([]);
  const [sushiEaten, setSushiEaten] = useState([]);
  const [moneyRemaining, setMoneyRemaining] = useState(100);

  console.log('SUSHI EATEN', sushiEaten)

  function eatSushi(consumedSushi) {
    setMoneyRemaining((prevMoney) => prevMoney - consumedSushi.price);
    setSushiEaten((prevEaten) => {
      setSushiEaten([...sushiEaten, consumedSushi]);
    })

  }

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(sushi => setAllSushi(sushi));
  }, [])

  return (
    <div className="app">
      <SushiContainer allSushi={allSushi} eatSushi={eatSushi} moneyRemaining={moneyRemaining} />
      <Table moneyRemaining={moneyRemaining} plates={sushiEaten} />
    </div>
  );
}

export default App;
