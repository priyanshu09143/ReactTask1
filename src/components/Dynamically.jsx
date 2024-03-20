import React, { useState } from 'react';
import ChildComponent from './Child';

function Dynamically() {
  const [components, setComponents] = useState([]);

  const handleAddChild = (parentId) => {
    const newComponent = { id: components.length, parentId: parentId };
    setComponents([...components, newComponent]);
  };

  const handleParentClick = () => {
    handleAddChild(null); // Adding a root component
  };

  const handleChildClick = (parentId) => {
    handleAddChild(parentId); // Adding a child component
  };

  const renderChildComponents = (parentId) => {
    return components
      .filter(component => component.parentId === parentId)
      .map((child, index) => (
        <div key={child.id} className='child'>
          <p onClick={() => handleChildClick(child.id)}>Child Component</p>
          <ChildComponent />
          {/* Recursive call to render child components within each child */}
          <div className="nested-child">
            {renderChildComponents(child.id)}
          </div>
        </div>
      ));
  };

  return (
    <div>
      <button onClick={handleParentClick}>Add Root Component</button>
      <div className="parent">
        {/* Render root level child components */}
        {renderChildComponents(null)}
      </div>
    </div>
  );
}

export default Dynamically;
