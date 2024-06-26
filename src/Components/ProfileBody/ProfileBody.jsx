import React from "react";
import "./ProfileBody.css";
import logo from "../../Assets/zerodha-founders.png";

function ProfileBody() {
  return (
    <div className="card-container">
      <img src={logo} alt="zerodha-bros" className="company-logo" />
      <div className="card-text">
        <h1 className="card-title">Zerodha</h1>
        <p className="card-description">
          We kick-started operations on the 15th of August, 2010 with the goal
          of breaking all barriers that traders and investors face in India in
          terms of cost, support, and technology. We named the company Zerodha,
          a combination of Zero and "Rodha", the Sanskrit word for barrier.
          Today, our disruptive pricing models and in-house technology have made
          us the biggest stock broker in India. Over 1+ Crore clients place
          millions of orders every day through our powerful ecosystem of
          investment platforms, contributing over 15% of all Indian retail
          trading volumes.
        </p>
        <div className="additional-info">
          <p>
            <strong>Founded Date:</strong> August 15, 2010
          </p>
          <p>
            <strong>Founders:</strong> Nithin Kamath, Nikhil Kamath
          </p>
          <p>
            <strong>Headquarters:</strong> Bangalore, India
          </p>
          <p>
            <strong>Industry:</strong> Financial Services
          </p>
          <p>
            <strong>Type of Business:</strong> Private
          </p>
          <p>
            <strong>Product/Service Offerings:</strong> Online brokerage
            services, trading platforms, investment tools
          </p>
          <p>
            <strong>Key Features:</strong> Low-cost trading, advanced
            technology, user-friendly platforms
          </p>
          <p>
            <strong>Target Market:</strong> Retail investors, traders,
            institutional investors
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://zerodha.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              zerodha.com
            </a>
          </p>
          <p>
            <strong>Contact Details:</strong> support@zerodha.com,
            +91-80-40402020
          </p>
          <p>
            <strong>Social Media Links:</strong>{" "}
            <a
              href="https://twitter.com/zerodhaonline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            ,{" "}
            <a
              href="https://facebook.com/zerodha"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileBody;