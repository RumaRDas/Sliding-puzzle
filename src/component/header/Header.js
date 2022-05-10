import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './style.css'

const Header = () => {
  return (
    <nav id="header" className="navbar-Items fixed-top">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" className="logo-img" />
      </div>
      <ul className="nav-menu">
        <li className="nav-list">
          <Link className="nav-links" to="/">
            Home
          </Link>
        </li>
        <li className="nav-list">
          <Link className="nav-links" to="/blanko">
            Blanko
          </Link>
        </li>
        <li className="nav-list">
          <Link className="nav-links" to="/slido">
            Slido
          </Link>
        </li>
        <li className="nav-list">
          <Link className="nav-links border-style" to="/tetro">
            Tetro
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
