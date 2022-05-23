import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>placeholder1</h4>
        <p className="money plus">{income}</p>

        <h4>placeholder2</h4>
        <p className="money minus">{expense}</p>

        <h4>placeholder3</h4>
        <p className="money minus">{expense}</p>

        <h4>placeholder4</h4>
        <p className="money minus">{expense}</p>

        <h4>placeholder5</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};
