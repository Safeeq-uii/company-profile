import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">969 NGAWI, JMK 45, IDN</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            {/* Updated About Us Link */}
            <a href="#about-us" className="footer-link">
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
