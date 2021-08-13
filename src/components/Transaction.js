import React,  {useContext} from 'react'
import {GlobalContext} from '../context/globalstate'

const Transaction = ({transaction}) => {
const sign = transaction.amount < 0 ? '-' :'+' ;

const{deletetransaction} = useContext(GlobalContext);

    return (
                 <li className={transaction.amount < 0 ?'listitem':'listitem2'}>
                    {transaction.text}<span className='money'>{sign}${Math.abs(transaction.amount)}</span> 
                    <button className='delete-btn' onClick={()=>deletetransaction(transaction.id)} title='Delete'><b>X</b></button>
                </li>
    )
}

export default Transaction
