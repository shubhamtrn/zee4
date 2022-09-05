import React from 'react'
import { NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
            <NavLink to='/'>    <li>Home</li></NavLink>
            <NavLink to='/aboutus'><li>About Us</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
