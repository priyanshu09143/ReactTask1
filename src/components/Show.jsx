import React, { useState } from 'react'

function Show() {
    const [show , setShow] = useState(true)
  return (
    <div className='show'>
        <div>
        <button onClick={()=>{setShow(false)}}>Hide</button>
        <button onClick={()=>{setShow(true)}}>Show</button>
        </div>
        {show && <p>This is a paragraph</p>}
    </div>
  )
}

export default Show