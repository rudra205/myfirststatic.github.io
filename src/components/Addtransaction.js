import React,{ useState ,useContext }from 'react'
import { GlobalContext } from '../context/globalstate';

const Addtransaction = () => {

    const[text,setText] = useState('');
    const [amount,setAmount] = useState(0);

  




    const {addtransaction} = useContext(GlobalContext);

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id:Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        }

        addtransaction(newTransaction);
        
        setAmount(0);
        setText('');
    }

    return (
        <>
            <h3 className='h3'>Add  new Transaction</h3>
            <form className='form' onSubmit={onSubmit}>
                <div className='form-sub'>
                  <label htmlFor="text">Text</label><br/>
                  <input type="text" placeholder='Enter the text...' value={text} onChange={(e) =>setText(e.target.value)}/>
                </div>
                <div className='form-sub'>
                    <label htmlFor="">Amount <br/>(negetive-expense, positive-income)</label><br/>
                    <input type="number" placeholder='Enter amount...' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <button className='add-btn'>Add Transaction</button>
            </form>
            
        </>
    )
}

export default Addtransaction
