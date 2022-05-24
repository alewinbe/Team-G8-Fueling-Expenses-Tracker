import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Refueling = ({ refueling }) => {
  const { deleteRefueling } = useContext(GlobalContext);

  return (
    <li className={refueling.fuelAmount < 0 ? "minus" : "plus"}>
      {refueling.car}{" "}
      <span>
        {refueling.moneySpent} €<br></br> {refueling.fuelAmount} L<br></br>{" "}
        {refueling.distanceDriven} km
      </span>
      <button
        onClick={() => deleteRefueling(refueling.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
