import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      feedback:
        "Finding my dream property was a breeze thanks to this amazing team! Highly recommend their services.",
      image: "./customer1.jpg",
    },
    {
      name: "David Brown",
      feedback:
        "The professionalism and support I received were outstanding. I couldn't be happier with the results.",
      image: "./customer2.jpg",
    },
    {
      name: "Sophia Lee",
      feedback:
        "This company truly understands customer needs. Their attention to detail and dedication are exceptional!",
      image: "./customer3.jpg",
    },
  ];

  return (
    <div id="testimonials" className="testimonials-wrapper">
      <div className="paddings innerWidth testimonials-container">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <h4 className="testimonial-name">{testimonial.name}</h4>
              </div>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
