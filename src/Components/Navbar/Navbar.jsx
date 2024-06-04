import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="we-see_navbar">
            <div className="we-see_navbar-logo"> 
                <h1> We See</h1>
            </div>
            <div className="we-see_navbar-sign">
                <p className="we-see_navbar-sign-sign-in">SIGN IN</p>
                <p className="we-see_navbar-sign-sign-up">SIGN UP</p>
            </div>
        </div>
    );
}

export default Navbar;