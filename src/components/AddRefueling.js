import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddRefueling = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [amountt, setAmountt] = useState(0);
  const [amounttt, setAmounttt] = useState(0);

  const { addRefueling } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newRefueling = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      amountt: +amountt,
      amounttt: +amounttt,
    };

    addRefueling(newRefueling);
  };

  return (
    <>
      <h3>Add new Refueling</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Car</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter car..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"> Fuel (L)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          <label htmlFor="amountt"> Money Spent (€)
          </label>
          <input
            type="number"
            value={amountt}
            onChange={(e) => setAmountt(e.target.value)}
            placeholder="Enter amount..."
          />
          <label htmlFor="amounttt"> Distance driven (km)
          </label>
          <input
            type="number"
            value={amounttt}
            onChange={(e) => setAmounttt(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Refueling</button>
      </form>
    </>
  );
};
