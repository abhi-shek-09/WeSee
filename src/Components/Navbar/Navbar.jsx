import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="we-see_navbar">
            <div className="we-see_navbar-logo"> 
                <h1>We See</h1>
            </div>
            <div className="we-see_navbar-tags">
                <h3 className="navbar-item"> HOME </h3>
                <h3 className="navbar-item"> ABOUT US </h3>
                <h3 className="navbar-item"> BLOGS </h3>
            </div>
            <div className="we-see_navbar-sign">
                <h1 className="we-see_navbar-sign-sign-in">SIGN IN</h1>
                <button className="we-see_navbar-sign-sign-up">SIGN UP</button>
            </div>
        </div>
    );
}

export default Navbar;