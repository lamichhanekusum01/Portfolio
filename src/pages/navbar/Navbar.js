import React from 'react'
import './Navbar.scss'
import NavElement from '../../components/navbar/NavElement'

function Navbar() {
  return (
    <div>  
    <nav>
        <a href="kusum" className="logo">Kusum</a>

        <ul>
          <NavElement src='/' title="Home"/>
            <NavElement src='/Portfolio' title="Portfolio"/>
            <NavElement src='/Portfolio' title="About me"/>
            <NavElement src='/Contact' title="Contact"/>
            
            
        </ul>


    </nav>
    </div>
  )
}

export default Navbar