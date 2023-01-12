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
    <>
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
              {/* <img
              src="https://cdn.vectorstock.com/i/preview-1x/66/05/mental-health-concept-vector-44406605.webp"
              className="img-fluid"
              alt=""
            /> */}
              <img
                src="https://cdn.vectorstock.com/i/preview-1x/16/84/mental-health-inner-harmony-scene-with-yoga-man-vector-44761684.webp"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Promise</h2>
            <p>
              MindEase is more than just an app, it's a community. Connect with
              others who understand what you're going through and share your
              journey to mental wellness. With MindEase, you'll have the support
              you need to feel better, every day.
            </p>
          </div>

          <div className="row">
            <div
              className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
            >
              <div className="icon-box icon-box-pink">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4 className="title">
                  <a href="">Professionalism</a>
                </h4>
                <p className="description">
                  Our mission is to provide immediate and confidential support
                  for individuals experiencing thoughts of suicide, and to
                  empower them with the tools and resources they need to stay
                  safe and seek help.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box icon-box-cyan">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4 className="title">
                  <a href="">Accessible Counselling</a>
                </h4>
                <p className="description">
                  We are dedicated to reducing the number of suicide deaths by
                  providing easy access to crisis support and mental health
                  resources, and by raising awareness about the importance of
                  suicide prevention.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box icon-box-green">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4 className="title">
                  <a href="">Community Support</a>
                </h4>
                <p className="description">
                  Our goal is to create a safe and supportive community where
                  individuals at risk of suicide can find the help they need,
                  when they need it, in order to overcome their struggles and
                  build a better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
