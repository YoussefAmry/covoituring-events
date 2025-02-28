import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <h1 className='navbar-logo'>
            <span>Covoituring</span>Events<span>.</span>
        </h1>
        <ul className='navbar-list'> 
            <li>Home</li>
            <li>Support</li>
            <li>About-us</li>
        </ul>
        <button>Get-started</button>
      </div>
    </>
  )
}

export default Navbar