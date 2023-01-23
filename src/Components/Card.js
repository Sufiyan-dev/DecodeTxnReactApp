import React, {useState} from 'react';
import './Card.css';


const card = (prop) => {

    let stringValueArray = JSON.stringify(prop.data.value).slice(1,-1).replace(/"/g,' ').split(",")
    return (
        <div className='card'>
            <div className='contract-section'>
                <div className='cAddress'><b>Contract address : </b>{prop.data['contract-address']}</div>
                <div><b>Contract name : </b>{prop.data['contract-name']}</div>
                <div><b>Contract symbol : </b>{prop.data['contract-symbol']}</div>
            </div>
            <div className='Values-section'>
                <div><b>Data</b></div>
                <div>
                {stringValueArray.map((ele, i) => 
                    <div key={i} className="value-div">{ele}</div>
                )}
                </div>
            </div>
        </div>
    )
};

export default card