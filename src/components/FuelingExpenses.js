import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const FuelingExpenses = () => {
  const { refuelings } = useContext(GlobalContext);

  const moneySpent = refuelings.map((refueling) => refueling.moneySpent);
  const fuelAmount = refuelings.map((refueling) => refueling.fuelAmount);
  const distanceDriven = refuelings.map(
    (refueling) => refueling.distanceDriven
  );

  const totalMoneySpent = moneySpent
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalFuelAmount = fuelAmount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalDistanceDriven = distanceDriven
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
 


  return (
    <div className="inc-exp-container">
      <div>
        <h4>Money Spent €</h4>
        <p className="money plus">{totalMoneySpent}</p>

        <h4>Total consumption (L)</h4>
        <p className="money plus">{totalFuelAmount}</p>

        <h4>Total Distance (km)</h4>
        <p className="money plus">{totalDistanceDriven}</p>

        <h4>Avg. Expenses/100km (€)</h4>
        <p className="money plus">{}</p>

        <h4>Avg. Consumption/100km (L)</h4>
        <p className="money plus">{}</p>
      </div>
    </div>
  );
};
