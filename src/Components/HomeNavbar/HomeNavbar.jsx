import React from "react";
import './HomeNavbar.css'
const HomeNavbar = () =>{
    return (
        <div className="we-see_homenav">
            <div className="we-see_homenav-right">
                <h1 className="we-see_homenav-logo">We See</h1>
                <div className="we-see_homenav-tags">
                        <h4>Home</h4>
                        <h4>My Investments</h4>
                        <h4>Generate reports</h4>
                </div>
            </div>
            <h4 className="we-see_homenav-logout">Logout</h4>
        </div>
    )
}

export default HomeNavbar;