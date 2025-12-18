import React, { useState } from 'react'

function Task1() {
 const [count,setCount] = useState(0);
const [status,setStatus] = useState(true)

  return (
    <>
    <h1>Welcome to counter</h1>
        <p>{count}</p>
        <button onClick={()=> setCount(count + 1)}>+</button>
    <p>{status ? "visible" : "invisible"}</p>
    <button onClick={()=> setStatus(!status)}>hide</button>
    </>
  )
}

export default Task1