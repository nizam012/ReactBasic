import React from 'react'
import { useState } from 'react';

function Div() {
    const [state, setState] = useState({
        value1: 0,
        value2: 0
    })

    function handleChane(e, val) {
        if (val === 1)
            setState({ ...state, value1: parseInt(e.target.value) });
        else
            setState({ ...state, value2: parseInt(e.target.value) })
        console.log(e.target.value, val);
    }
    const [result, setResult] = useState(0)

    function handleDiv() {
        setResult(parseInt(state.value1) / parseInt(state.value2));
    }

    // console.log(result);
    return (
        <div>
            <div className="cal-container">
                <h1>Division</h1>
                <input className='input-acl' value={state.value1} type="number" onChange={(e) => handleChane(e, 1)} />
                <b>/</b>
                <input className='input-acl' value={state.value2} type="number" onChange={(e) => handleChane(e, 2)} />
                <button className="btn" onClick={handleDiv} >Division</button>
                <h2>Result:{result}</h2>
            </div>
        </div>
    )
}

export default Div
