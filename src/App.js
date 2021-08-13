import './App.css';
import Addtransaction from './components/Addtransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import Incomeexpense from './components/Incomeexpense';
import Transactionlist from './components/Transactionlist';

import {  GlobalProvider } from './context/globalstate'

function App() {
  return (
    <div className="App">
      <div className="content">
        <GlobalProvider>
           <Header/>
           <Balance/>
           <Incomeexpense/>
           <Transactionlist/> 
           <Addtransaction/>
       </GlobalProvider>
      </div>
     
    </div>
  );
}

export default App;
