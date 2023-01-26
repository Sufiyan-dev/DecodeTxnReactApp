import { useState } from 'react';
import './App.css';
import {setContractName}  from './decodeLogs';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  const [ TxnLogs,  setTxnLogs ] = useState([]);
  const [ hash,  setHash ] = useState('');
  const [status, setStatus] = useState('tx');

  const getData = (hash) => {
    // let decodeData = await setContractName(hash)
    setStatus('decoding')
    setContractName(hash).then((decodeData) => {
      console.log("result")
      console.log(decodeData)
      
      setTxnLogs(decodeData)
      setStatus('decoded')
    })

  }

  const handleOnSubmit = (e) => {
    console.log('in on submit')
    e.preventDefault();
    setTxnLogs([])

    if(hash.length > 0){
      console.log(hash);
      getData(hash)

      setHash("");
    }
  }
  
  const handleOnChange = (e) => {
    console.log('in on change')
    setHash(e.target.value);
  }

  // if(status == 'decoding'){
  //   return(
  //     <div>Hello</div>
  //   )
  // }


  return (
    <div className="App">
      <div className='header-section'>
        <h1>Decode Txn</h1>
        <p className='note-para'>NOTE: Currenlty this app decodes only 1inch contracts transactions. Link to 1inch contract <a href='https://etherscan.io/address/0x1111111254eeb25477b68fb85ed929f73a960582' target="_blank">LINK</a></p>
      </div>
      <div className='formArea'>
        <form onSubmit={handleOnSubmit}>
          <div>Tx Hash : <input placeholder='Hash..' className='hashBox' value={hash} onChange={handleOnChange}/></div>
        </form>
      </div>
      <div className='resultArea'>
          { status == 'decoding' ?  (console.log("in decoding"), <div>Decoding transaction received</div> ):(
            <div className='txnArea'>
            <div>Result</div>
            {TxnLogs && TxnLogs.length > 0 && TxnLogs.map((log) =>
              <Card data={log} />,
              // console.log("log ",log),
            )}
          </div>
          )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
