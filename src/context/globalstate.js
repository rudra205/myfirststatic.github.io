import React, {createContext , useReducer } from 'react'
import AppReducer from './Appreducer'


const initialState = {
    transactions: []
};

//create context

export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) =>{
      const [ state, dispatch] = useReducer(AppReducer, initialState);

//Actions

function deletetransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload:id
    })
}

function addtransaction(transaction){
        dispatch({
            type: 'add_TRANSACTION',
            payload:transaction
        })
    }


      return <GlobalContext.Provider value={
          { transactions: state.transactions,deletetransaction,addtransaction }
          
      }>
          {children}
      </GlobalContext.Provider>
}