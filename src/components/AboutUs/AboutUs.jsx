import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id="about-us" className="about-wrapper">
      <div className="innerWidth paddings about-container">
        <h2 className="about-title">About Us</h2>

        {/* Company History */}
        <section className="about-section">
          <div className="about-content futuristic-box">
            <h3>Our History</h3>
            <p>
              Founded in 2010, our company has been at the forefront of
              revolutionizing the real estate industry. Over the years, we have
              helped thousands of clients find their dream properties and
              achieved milestones that reflect our dedication to excellence.
            </p>
          </div>
          <img
            src="./history-image.jpg"
            alt="Company History"
            className="about-image futuristic-border"
          />
        </section>

        {/* Team Section */}
        <section className="about-section">
          <h3 className="section-title">Meet Our Team</h3>
          <div className="team-members">
            <div className="team-member futuristic-card">
              <img src="./team1.jpg" alt="John Doe" />
              <h4>John Doe</h4>
              <p>Real Estate Specialist</p>
            </div>
            <div className="team-member futuristic-card">
              <img src="./team2.jpg" alt="Jane Smith" />
              <h4>Rick Smith</h4>
              <p>Property Consultant</p>
            </div>
            <div className="team-member futuristic-card">
              <img src="./team3.jpg" alt="Mark Johnson" />
              <h4>Mark Johnson</h4>
              <p>Customer Support</p>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="about-section">
          <img
            src="./culture-image.jpg"
            alt="Our Culture"
            className="about-image futuristic-border"
          />
          <div className="about-content futuristic-box">
            <h3>Our Culture</h3>
            <p>
              At our company, we foster a culture of innovation, collaboration,
              and excellence. We are driven by our core values of integrity,
              respect, and teamwork, creating a workplace that inspires growth
              and creativity.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
