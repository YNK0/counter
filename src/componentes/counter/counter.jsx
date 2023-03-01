import React from 'react'
import { useState } from 'react'
import "./counter.css"


export default () => { 
    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero(numero + 1);
    }

    const decrementar = () => {
        setNumero(numero - 1);
    }

    const reset = () => {   
        setNumero(0);
    }

    return ( 
        <div className='main-container'> 
            <div className='counter-container'>
                <h1>Contador</h1>
                <h1>{numero}</h1> 
            </div>
            <div className='buttons-container'>
                <button onClick={incrementar}>Incrementar</button> 
                <button onClick={decrementar}>Decrementar</button> 
                <button onClick={reset}>Reset</button>
            </div>
        </div> 
    ) 
}