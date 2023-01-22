import { useState } from 'react';
import './App.css';
import { setContractName } from './decodeLogs';
import Card from './Components/Card';

function App() {
  const [ TxnLogs,  setTxnLogs ] = useState([]);
  const [ hash,  setHash ] = useState('');

  const getData = async (hash) => {
    let decodeData = await setContractName(hash)
    console.log("result")
    console.log(decodeData)

    setTxnLogs(decodeData)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(hash){
      console.log(hash);
      getData(hash)

      setHash("");
    }
  }
  
  const handleOnChange = (e) => {
    setHash(e.target.value);
  }


  return (
    <div className="App">
      <div>
        <form onSubmit={handleOnSubmit}>
          <input placeholder='Hash..' className='hashBox' value={hash} onChange={handleOnChange}/>
        </form>
      </div>

      <div className='resultArea'>
        <div>Result</div>
        <div>
        {TxnLogs && TxnLogs.length > 0 && TxnLogs.map((log) => 
           <Card {...TxnLogs}/>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
