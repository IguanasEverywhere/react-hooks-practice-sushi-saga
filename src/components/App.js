import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import AddMoneyForm from './AddMoneyForm';

const API = "http://localhost:3001/sushis";

function App() {


  const [allSushi, setAllSushi] = useState([]);
  const [sushiEaten, setSushiEaten] = useState([]);
  const [moneyRemaining, setMoneyRemaining] = useState(100);


  function eatSushi(consumedSushi) {
    fetch(`http://localhost:3001/sushis/${consumedSushi.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        eaten: true
      })
    })
    .then(r => r.json())
    .then(updatedSushi => {
      console.log("UPDATED SUSHI", updatedSushi)
      const revisedSushi = allSushi.map(sushi => {
        if (sushi.id === updatedSushi.id) {
          return updatedSushi
        } else {
          return sushi
        }
      })
      setAllSushi(revisedSushi)
    })
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

  function addMoney(moneyToAdd) {
    setMoneyRemaining((prevMoney) => prevMoney + moneyToAdd);
  }


  return (
    <div className="app">
      <SushiContainer allSushi={allSushi} eatSushi={eatSushi} moneyRemaining={moneyRemaining} />
      <Table moneyRemaining={moneyRemaining} plates={sushiEaten} />
      <AddMoneyForm addMoney={addMoney}/>
    </div>
  );
}

export default App;
