import React from 'react'
import { useState } from 'react'

function Sub() {
    const [state, setState] = useState({
        value1: 0,
        value2: 0
    })
    function handleChange(e, val) {
        if (val === 1)
            setState({ ...state, value1: parseInt(e.target.value) });
        else
            setState({ ...state, value2: parseInt(e.target.value) });
    }

    const [result1, setResult1] = useState(0)

    function handleSub(){
        setResult1(parseInt(state.value1)-parseInt(state.value2));
    }
    return (
        <div>
            <div className="cal-container">
                <h1>Subtract</h1>
                <input type="number" value={state.value1} className="input-acl" onChange={(e) => handleChange(e, 1)} />
                <b>-</b>
                <input type="number" value={state.value2} className="input-acl" onChange={(e) => handleChange(e, 2)} />
                <button className="btn" onClick={handleSub} >Subtract</button>
                <h1>Result:{result1}</h1>
            </div>
        </div>
    )
}

export default Sub
