"use client"

import { links } from '../../utils/data'
import { useState } from "react"
import NavLink from '../NavLink'
import './navbar.scss'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='nav'>

      <div className={`${showMenu ? "nav_menu show_menu" : "nav_menu"}`}>

        <ul className="nav_list">
          {
            links.map(link => (
              <li key={link.id} className='nav_list_item'>
                <NavLink
                  className="nav_link" 
                  activeClassName="active_nav"
                  href={link.path}
                  onClick={()=> setShowMenu(!showMenu)}
                  end
                >
                  {link.icon}
                  <h3 className="nav_name">{link.name}</h3>
                </NavLink>
                
              </li>
            ))
          }
        </ul>

      </div>

      <div className={`${showMenu ? "nav_toggle animate_toggle" : "nav_toggle"}`} onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  )
}

export default Navbar