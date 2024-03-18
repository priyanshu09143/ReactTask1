import React, { useState } from 'react'

function Counter() {
  const [First, setFirst ] = useState("")
  const [Second, setSecond ] = useState("")
  const [Total, setTotal ] = useState(0)
  const [msg , setMsg ] = useState("")
  return (  
    <>
    <div className='counter'>
      <div className='inputs'>
      <input type="number" placeholder='0' onChange={(e)=> setFirst(e.target.value)} value={First}/>
      <h3>+</h3>
      <input type="number" value={Second} onChange={(e)=> setSecond(e.target.value)} placeholder='0'/>
      </div>
      <div>
        <button 
        onClick={()=>{
          if(First === "" || Second === ""){
            setMsg("Please Fill Both values")
           
          } else{
            setTotal(+First + +Second)
            setMsg("")
          } 
          }}>
          =
          </button>
      </div>
      <div>
        {Total}
      </div>
    </div>
    <p>{msg}</p>
    </>
  )
}

export default Counter