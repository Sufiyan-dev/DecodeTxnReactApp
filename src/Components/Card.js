import React, {useState} from 'react';
import './Card.css';


const card = ({contractAddress, contractName, contractSymbol, value}) => {

    // const backgroundCard = {
    //     backgroundColor: 'skyblue',
    //     display: 'flex',
    //     flexDirection: 'column'
    // }

    // const contractDiv = {
    //     border: 'black solid 1px'
    // }



    return (
        <div className='card'>
            <div className='contract-section'>
                <div className='cAddress'>{contractAddress}</div>
                <div>{contractName}</div>
                <div>{contractSymbol}</div>
            </div>
            <div className='Values-section'>
                <div>Value</div>
                <div>{value}</div>
            </div>
        </div>
    )
};

export default card