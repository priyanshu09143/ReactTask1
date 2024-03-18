import React, { useState } from 'react'

function InputChild() {
    const [value , setValue] = useState("")
    
  return (
<>
    <div className='DataBinding'>
    <input type="text" placeholder='Enter..' value={value} onChange={(e)=> setValue(e.target.value)}/>
    <p>{value}</p>
    </div>

</>
  )
}
export default InputChild


