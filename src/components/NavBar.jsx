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
        <li><Link to={'/AddChild'}>2 Way Data Binding Or Dynamically Add Component</Link></li>
        <li><Link to={'/show'}>Show/Hide</Link></li>
      </nav>
        
    </div>
  )
}

export default NavBar