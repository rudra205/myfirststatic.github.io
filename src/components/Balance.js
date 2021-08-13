import React ,{useContext}from 'react'
import { GlobalContext } from '../context/globalstate'

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction =>transaction.amount);

    const total = amounts.reduce((acc,item)=>(acc += item),0).toFixed(2);

    
    return (
        <div className='balance'>
            <h4>Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance
