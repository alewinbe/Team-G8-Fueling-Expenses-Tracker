import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddRefueling = () => {
  const [car, setCar] = useState("");
  const [fuelAmount, setFuelAmount] = useState(0);
  const [moneySpent, setMoneySpent] = useState(0);
  const [distanceDriven, setDistanceDriven] = useState(0);

  const { addRefueling } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newRefueling = {
      id: Math.floor(Math.random() * 100000000),
      car,
      fuelAmount: +fuelAmount,
      moneySpent: +moneySpent,
      distanceDriven: +distanceDriven,
    };

    addRefueling(newRefueling);
  };

  return (
    <>
      <h3>Add new Refueling</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="car">Car</label>
          <input
            type="text"
            value={car}
            onChange={(e) => setCar(e.target.value)}
            placeholder="Enter car..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="fuelAmount"> Fuel (L)
          </label>
          <input
            type="number"
            value={fuelAmount}
            onChange={(e) => setFuelAmount(e.target.value)}
            placeholder="Enter fuelAmount..."
          />
          <label htmlFor="moneySpent"> Money Spent (€)
          </label>
          <input
            type="number"
            value={moneySpent}
            onChange={(e) => setMoneySpent(e.target.value)}
            placeholder="Enter fuelAmount..."
          />
          <label htmlFor="distanceDriven"> Distance driven (km)
          </label>
          <input
            type="number"
            value={distanceDriven}
            onChange={(e) => setDistanceDriven(e.target.value)}
            placeholder="Enter fuelAmount..."
          />
        </div>
        <button className="btn">Add Refueling</button>
      </form>
    </>
  );
};
