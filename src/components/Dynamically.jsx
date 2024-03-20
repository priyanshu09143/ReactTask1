import React, { useState } from 'react';
import ChildComponent from './Child';

function Dynamically() {
  const [childComponents, setChildComponents] = useState([]);
  const [additionalChildComponents, setAdditionalChildComponents] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAddChild = () => {
    setChildComponents([...childComponents, <ChildComponent key={childComponents.length} />]);
    setAdditionalChildComponents([...additionalChildComponents, []]);
  };

  const handleAddAnotherChild = (index) => {
    const newAdditionalChild = <ChildComponent key={additionalChildComponents[index].length} title="Inside a child component" />;
    setAdditionalChildComponents(prevState => {
      const newState = [...prevState];
      newState[index] = [...newState[index], newAdditionalChild];
      return newState;
    });
  };

  const handleChildClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <button onClick={handleAddChild}>Add Child Component</button>
      {childComponents.map((child, index) => (
        <div key={index} className='child' onClick={() => handleChildClick(index)}>
          {child}
          {activeIndex === index && (
            <button onClick={() => handleAddAnotherChild(index)}>Add A New Child</button>
          )}
          { additionalChildComponents[index].map((anotherChild, subIndex) => (
            <div key={subIndex}>{anotherChild}{anotherChild.length}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Dynamically;
