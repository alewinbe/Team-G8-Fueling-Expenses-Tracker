import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// Initial State
const initialState = {
    refuelings: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteRefueling(id) {
        dispatch({
            type: 'DELETE_REFUELING',
            payload: id
        });
    }

    function addRefueling(refueling) {
        dispatch({
            type: 'ADD_REFUELING',
            payload: refueling
        });
    }

    return(<GlobalContext.Provider value={{refuelings: state.refuelings,
    deleteRefueling, addRefueling}}>
            {children}
        </GlobalContext.Provider>);
}