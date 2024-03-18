import React, { useState } from 'react'
import ChildComponent from './Child'
function InputChild() {
    const [value , setValue] = useState("")
    const [childComponents, setChildComponents] = useState([]);
    const handleAddChild = () => {
      setChildComponents([...childComponents, <ChildComponent key={childComponents.length} value={value}/>]);
    };
  return (
<>
    <div className='DataBinding'>
    <input type="text" placeholder='Enter..' value={value} onChange={(e)=> setValue(e.target.value)}/>
    </div>

    <div>
      <button onClick={handleAddChild}>Add Child Component</button>
      {childComponents.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
</>
  )
}
export default InputChild


