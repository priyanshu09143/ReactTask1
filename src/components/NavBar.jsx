import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
      <nav>
        <li><Link to={'/users'}>Users</Link></li>
        <li><Link to={'/'}>Basic</Link></li>
        <li><Link to={'/AddValue'}>SumOfNumbers</Link></li>
        <li><Link to={'/counter'}>Counter</Link></li>
        <li><Link to={'/search'}>Search</Link></li>
      </nav>
        
    </div>
  )
}

export default NavBar