import React from "react";

import "../index.css";
import "./Contact.css";

import Carousel from "../assets/images/contact/Contact.png";
import FormImg from "../assets/images/contact/contactFormImg.jpg";

import Form from "../Components/Form";

function Contact() {
  return (
    <>
      <div className="contact--container">
        <div className="carousel contact--carousel">
          <h1 className="blue">Contact Us</h1>
          <img src={Carousel} alt="carousel" className="Carousel--image" />
        </div>

        <div className="vertical--flex center form-wrapper">
          <h1 className="join--text">
            Join Us and Embark your Journey to Development
          </h1>
          <div className="form--container horizontal--flex center">
            <Form />
            <img src={FormImg} alt="form" className="form--img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
