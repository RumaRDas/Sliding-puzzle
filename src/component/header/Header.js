import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useMediaQuery } from 'react-responsive'
import './style.css'

const Header = () => {
  const smallDevice = useMediaQuery({
    query: '(max-width: 800px)',
  })

  return (
    <nav className="navbar-Items fixed-top" id="header">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" className="logo-img" />
      </div>
      <ul className="nav-menu">
        <li className="nav-list">
          <Link to="/" className="nav-links">
            {smallDevice ? (
              <dt className="nav-style">H</dt>
            ) : (
              <dt className="nav-style">Home</dt>
            )}
          </Link>
        </li>
        <li className="nav-list">
          <Link to="/blanko" className="nav-links">
            {smallDevice ? (
              <dt className="nav-style">B</dt>
            ) : (
              <dt className="nav-style">Blanko</dt>
            )}
          </Link>
        </li>
        <li className="nav-list">
          <Link to="/slido" className="nav-links">
            {smallDevice ? (
              <dt className="nav-style">S</dt>
            ) : (
              <dt className="nav-style">Slido</dt>
            )}
          </Link>
        </li>
        <li className="nav-list">
          <Link to="/tetro" className="nav-links">
            {smallDevice ? (
              <dt className="nav-style border-style">T</dt>
            ) : (
              <dt className="nav-style border-style">Tetro</dt>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
