import React from "react";
import "../navbar.css"; 
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav className="navbar">
    
    <div className="logo"><NavLink to="/"><img src= ""/>MOOD<span className="tunes-text">TUNES</span></NavLink></div>

     
    <ul className="nav-links"> 
     <li><NavLink to="/about"  className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
     <li><NavLink to="/moods" className={({ isActive }) => isActive ? "active-link" : ""}>Moods</NavLink></li>
     <li><NavLink to="/favorites" className={({ isActive }) => isActive ? "active-link" : ""}>Favorites</NavLink></li>
    </ul>

    <NavLink to="/join" className={({ isActive }) => `join-btn ${isActive ? "active-link" : ""}`}> JOIN </NavLink>

    
    </nav>
    );
  };
  
  
  
  export default Navbar;