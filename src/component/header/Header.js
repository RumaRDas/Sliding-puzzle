import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
    <nav id="header" className="navbar-Items fixed-top">
      <div className="navbar-logo">
        <h1>logo</h1>
      </div>
      <ul className="nav-menu">
        <li className="nav-list">
          <Link className="nav-links" to="/">
            Home
          </Link>
        </li>
        <li className="nav-list">
          <Link className="nav-links" to="/blinko">
            Blinko
          </Link>
        </li>
        <li className="nav-list">
          <Link className="nav-links" to="/slido">
            Slido
          </Link>
        </li>
        <li className="nav-list">
          <Link className="nav-links" to="/tetro">
            Tetro
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
