import React, { useState } from 'react'
function ArrayUser() {

  const [Show , setShow] = useState(true)
    let users = [
    { name: "Priyanshu ", email: "priyanshu@gmail.com" },
    { name: "Vishal", email: "vishal@gmail.com" },
    { name: "Mukesh ", email: "mukesh@gmail.com" },
    { name: "Arjun ", email: "arjun@gmail.com" },
    { name: "Prateek ", email: "prateek@gmail.com" },
    ]  
  return (
    <>
    <h3>Array Of Users</h3>

    {Show && users.map((e,index) => {
        return (
            <div key={index}>
                Name : {e.name}, Email : {e.email}
            </div>
        )
    })}
    <button className='Hide' onClick={() => setShow(!Show)}>{Show ? "Hide" : "Show"}</button>
    </>
  )
}

export default ArrayUser