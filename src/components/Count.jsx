import React from 'react'
import { useState } from 'react';



function Count() {
    const [count, setCount] = useState(0)

  function handleAdd() {
    if (count === 10) {
      return;
    }
    setCount(count + 1)
  }
  function handleDec() {
    if (count === 0) {
      return;
    }
    setCount(count - 1)
  }
    return (
        <div>
            <div className="count-container">
                <div className="count">
                    <h1>This is count component</h1><hr />
                    <h2>Count : {count}</h2>

                    <button className='btn' onClick={handleAdd}>Increment</button>
                    <button className='btn' onClick={handleDec}>Decrement</button>
                </div>
                <div className="details">
                    <ul>
                        <li>useState react hook as been used to store and manipulate data  </li>
                        <li>Increment button increments the number </li>
                        <li>Decerment button decrements a number</li>
                        <li>Validation in increment is upto number 10 and in decrement no Negative numbers</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Count
