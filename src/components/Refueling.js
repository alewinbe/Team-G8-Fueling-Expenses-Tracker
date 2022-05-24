import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Refueling = ( { refueling } ) => {
    const { deleteRefueling } = useContext(GlobalContext);
    const sign = refueling.fuelAmount < 0 ? '-' : '+';

    return (
    <li className={refueling.fuelAmount < 0 ? 'minus' : 'plus'}>
        {refueling.car} <span>{sign}${Math.abs(refueling.fuelAmount)}</span>
        <button onClick={() => deleteRefueling(refueling.id)} className="delete-btn">x</button>
    </li> 
  )
}
