import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { links } from '../data'
import "./Navbar.css"
import {AiOutlineBars} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
import Logo from "../images/logo.png"
const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false)
  const toggleHandler = () => {
    setIsNavActive(lastState => !lastState)
  }
  return (
    <header>
        <nav>
            <div className="container nav__container">
                <Link to="/" onClick={() => setIsNavActive(false)} className="logo">
                <img src={Logo} alt="nav logo" />
                </Link>
                <ul className={`nav__links ${isNavActive ? "show__nav" : "hide__nav"}`}>
                    {links.map(element => <li key={element.name}><NavLink to={element.path} onClick={toggleHandler} className={({isActive}) => isActive? "active-nav" : ""}>{element.name}</NavLink></li>)}
                </ul>
            <button onClick={toggleHandler} className='nav__toggle-btn'>{isNavActive? <AiOutlineClose/> : <AiOutlineBars/>}</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar