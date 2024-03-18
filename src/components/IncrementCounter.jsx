import React, { useState } from 'react'
function IncrementCounter() {
    const [count, setCount] = useState(0);
  return (
    <div className='counters'>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default IncrementCounter