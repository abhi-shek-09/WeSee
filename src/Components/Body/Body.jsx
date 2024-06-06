import React from "react";
import './Body.css'
import logo from '../../Assets/Landing.jpg' 
const Body = () =>{
    return (
        <div className="we-see_landing">
            <div className="we-see_landing-text">
                <h1>Build your business without a hassle</h1>
                <h4>Where dreams meet dollars, ideas flow, and investors find their next big adventure. Let's dance!</h4>
            </div>
            <div className="we-see_landing-logo">
                <img src={logo} alt="dummy-text"/>
            </div>
        </div>
    )
}

export default Body;