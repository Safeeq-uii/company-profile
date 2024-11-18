import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* First row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart detail">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <span className="primaryText">Call</span>
                </div>
                <span className="secondaryText">6281 3696 9696</span>
                <div className="flexCenter button">Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart detail">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <span className="primaryText">Chat</span>
                </div>
                <span className="secondaryText">6281 3696 9696</span>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>

            {/* Second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart detail">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <span className="primaryText">Video Call</span>
                </div>
                <span className="secondaryText">6281 3696 9696</span>
                <div className="flexCenter button">Video Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart detail">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <span className="primaryText">Message</span>
                </div>
                <span className="secondaryText">6281 3696 9696</span>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Property" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;