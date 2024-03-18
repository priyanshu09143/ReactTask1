import React, { useState } from 'react'
import ChildComponent from './Child'
function Dynamically() {
    const [childComponents, setChildComponents] = useState([]);
    const handleAddChild = () => {
      setChildComponents([...childComponents, <ChildComponent key={childComponents.length} />]);
    };
  return (
    <div>
    <button onClick={handleAddChild}>Add Child Component</button>
    {childComponents.map((child, index) => (
      <div key={index}>{child}</div>
    ))}
  </div>
  )
}

export default Dynamically