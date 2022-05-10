import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
    <nav className="navbar-Items">
      <div>
        <h1>logo</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blinko">Blinko</Link>
        </li>
        <li>
          <Link to="/slido">Slido</Link>
        </li>
        <li>
          <Link to="/tetro">Tetro</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
