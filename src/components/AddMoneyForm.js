import React, {useState} from 'react';

function AddMoneyForm({addMoney}) {

  const [moneyToAdd, setMoneyToAdd] = useState(1);

  function handleMoneyChange(e) {
    setMoneyToAdd(parseInt(e.target.value))
  }

  function handleMoneySubmit(e) {
    e.preventDefault();
    addMoney(moneyToAdd);
    setMoneyToAdd(1)
  }
  return (
    <form onSubmit={handleMoneySubmit}>
      <input onChange={handleMoneyChange} type='number' value={moneyToAdd}></input>
      <input type='submit'></input>
    </form>
  )
}

export default AddMoneyForm;