import React, { createContext, useReducer } from 'react';
import {reducer} from './AppReducer';

const initialState ={
    transaction: [{name: 'Apple', amount: 3},
    {name: 'Banana', amount: 5}]
};

const globalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer(reducer, initialState);
    
    const deleteTransaction = (name)=> {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: name
        })
    }
    const addTransaction = (transaction)=> {
        console.log(transaction);
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return(
        <globalContext.Provider value={
            {
                transaction: state.transaction,
                deleteTransaction,
                addTransaction
            }
        }>   
            {children}
        </globalContext.Provider>
    )
}

export default globalContext;