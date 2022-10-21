import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "./Clock"


function NavBar({ darkMode, changeDarkMode }) {


    return (
       <div className="navBarHeader">
        <h1 className="mastHead">Portfolio</h1>
        <div>
        <button className="darkLightModeButton" id={darkMode ? "lightModeButton" : "darkModeButton"} onClick={changeDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
        </div>
        <br></br>
        <header className="NavLinkContainer">
        <NavLink to="/" end className="navLinkRoutes">Home</NavLink>
        <NavLink to="/about" className="navLinkRoutes"> About</NavLink>
        <NavLink to="/projects" className="navLinkRoutes"> Projects</NavLink>
        <NavLink to="/contact" className="navLinkRoutes"> Contact</NavLink>
        </header>
        <Clock />
       </div> 
    )
}

export default NavBar;