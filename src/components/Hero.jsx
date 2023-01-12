import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleClick() {
    setInput("");
  }
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
            data-aos="fade-up"
          >
            <div>
              <h1>
                Take control of your mental well-being with{" "}
                <span className="hero-span">MindEase</span>
              </h1>
              <h2>
                Our app is designed to help you manage stress, improve your
                mood, and boost your overall mental health
              </h2>
              <a href="#about" className="btn-get-started scrollto">
                Book Appointment
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="fade-left"
          >
            <img
              src="https://cdn.vectorstock.com/i/preview-1x/66/05/mental-health-concept-vector-44406605.webp"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
