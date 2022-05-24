// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_REFUELING':
            return {
                ...state,
                refuelings: state.refuelings.filter(refueling => refueling.id !==
                    action.payload)    
            }
        case 'ADD_REFUELING':
            return {
                ...state,
                refuelings: [action.payload, ...state.refuelings]
            }
        default:
            return state;
    }
}