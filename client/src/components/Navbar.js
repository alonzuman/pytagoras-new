import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar-container'>
      <Link className='navbar-element' to='/'>
        Home
      </Link>
      <Link className='navbar-element' to='/all'>
        All Videos
      </Link>
      <Link className='navbar-element' to='/add'>
        Add new
      </Link>
      <Link className='navbar-element' to='/about'>
        About
      </Link>
    </nav>
  )
}
