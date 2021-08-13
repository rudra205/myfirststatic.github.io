import React ,{ useContext } from 'react'
import { GlobalContext } from '../context/globalstate'
import Transaction from './Transaction';

const Transactionlist = () =>{
   
  const { transactions } = useContext(GlobalContext);
 

    return (
        <>
            <h3 className='h3'>History</h3>
            <div>
            <ul>
                {transactions.map(transaction =>(
                   <Transaction key={transaction.id} transaction={transaction}/>
                   ))}
            
               
            </ul>
            </div>
        </>
    )
}

export default Transactionlist
