import React from 'react'
import { Link } from 'react-router-dom'
import { MenuData } from './MenuData'
import './Navbar2.css';

function Navbar() {
  return (
    <>
    <nav className= 'nav-menu'>
        <ul className= 'nav-menu-items'>
        <h1>Maine Music Educator Association</h1>
        {MenuData.map((item,index) => {
            return (
                <li key={index} className={item.cssName}>
                    <Link to={item.path}>
                        <span>{item.title}</span>    
                    </Link>
                </li>
            );
        })}
        </ul>
    </nav>
    </>
  );
}

export default Navbar;
