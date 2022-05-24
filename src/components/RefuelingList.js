import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Refueling } from './Refueling';

export const RefuelingList = () => {
    const { refuelings } = useContext(GlobalContext);

   

    return (
        <> <h3>Fueling History</h3>
            <ul className="list">
                {refuelings.map(refueling => (<Refueling  key={refueling.id} refueling={refueling}/>))}
            </ul>
        </>

    )
}
