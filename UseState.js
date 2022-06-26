import React, { useState } from 'react'

const UseState = () => {

    const [count , setCount] = useState(0);

    const UpdatedState = () => {
        setCount(count+1);
    }
  return (
    <div>
        
      <h1>Use State Hook</h1>
      <h2>Count : {count}</h2>
      <button onClick={UpdatedState}>Updated Count</button>
    </div>
  )
}

export default UseState
