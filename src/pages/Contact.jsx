import React from "react";

import "../index.css";

import Carousel from "../assets/images/contact/Contact.png";

import Form from "../Components/Form";

function Contact() {
  return (
    <>
      <div className="contact--container">
        <div className="carousel contact--carousel">
          <h1 className="blue">Contact Us</h1>
          <img src={Carousel} alt="carousel" className="Carousel--image" />
        </div>

        <Form />
      </div>
    </>
  );
}

export default Contact;
