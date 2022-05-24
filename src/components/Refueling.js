import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Refueling = ( { refueling } ) => {
    const { deleteRefueling } = useContext(GlobalContext);
    const sign = refueling.amount < 0 ? '-' : '+';

    return (
    <li className={refueling.amount < 0 ? 'minus' : 'plus'}>
        {refueling.text} <span>{sign}${Math.abs(refueling.amount)}</span>
        <button onClick={() => deleteRefueling(refueling.id)} className="delete-btn">x</button>
    </li> 
  )
}
