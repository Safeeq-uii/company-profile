import React, { useEffect, useState } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  // Fetch data from Random User API
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

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
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member futuristic-card">
                <img
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                />
                <h4>
                  {member.name.first} {member.name.last}
                </h4>
                <p>
                  {member.location.city}, {member.location.country}
                </p>
              </div>
            ))}
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
