import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const buttonStyle = {
    marginTop: 0
  }

  return (
    <nav className='navbar-container'>
      <Link className='navbar-element' to='/'>
        Home
      </Link>
      <Link className='navbar-element' to='/all'>
        All Videos
      </Link>
      <Link style={buttonStyle} className='navbar-element primary-button' to='/add'>
        Add new
      </Link>
    </nav>
  )
}
