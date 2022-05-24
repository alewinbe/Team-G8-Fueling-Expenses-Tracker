import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const FuelingExpenses= () => {
  const { refuelings } = useContext(GlobalContext);

  const fuelAmounts = refuelings.map((refueling) => refueling.fuelAmount);

  const income = fuelAmounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Money Spent €</h4>
        <p className="money plus">{income}</p>

        <h4>Total consumption (L)</h4>
        <p className="money plus">{income}</p>

        <h4>Total Distance (km)</h4>
        <p className="money plus">{income}</p>

        <h4>Avg. Expenses/100km (€)</h4>
        <p className="money plus">{income}</p>

        <h4>Avg. Consumption/100km (L)</h4>
        <p className="money plus">{income}</p>
      </div>
    </div>
  );
};
