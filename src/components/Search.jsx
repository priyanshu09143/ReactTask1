import React, { useState } from 'react'

function Search() {
    const arr = ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Kota", "Bikaner", "Pushkar", "Mount Abu"];
    const [Search, setSearch] = useState("")
    const FilterArr = arr.filter((ele) => ele.toLowerCase().includes(Search.toLowerCase()))
    console.log(FilterArr)
  return (
    <>
    <input type="text" placeholder='Search..' value={Search} onChange={(e)=> setSearch(e.target.value)} />
    {FilterArr.map((e, index)=> <p key={index}>{e}</p>)}
    </>
  )
}

export default Search