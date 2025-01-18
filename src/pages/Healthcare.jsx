import React from "react";
import { Link } from "react-router-dom";

import "./Healthcare.css";
import "../index.css";

import Carousel from "../assets/images/healthcare/Healthcare.png";
import healthcare from "../assets/images/healthcare/healthcareText.jpg";
import go from "../assets/icons/go.png";

function Healthcare() {
  return (
    <>
      <div className="healthcare--container">
        <div className="carousel healthcare--carousel">
          <h1 className="green">Healthcare</h1>
          <img src={Carousel} alt="carousel" className="Carousel--image" />
        </div>

        <div className="healthcare--text--container horizontal--flex">
          <div className="healthcare--image--container">
            <img src={healthcare} alt="TekEssence" />
          </div>
          <div className="text--container vertical--flex">
            <p>
              Improving the quality of healthcare services is an ongoing process
              and health care providers and policy makers are finding newer ways
              every day to implement them. Key among them is a suitable business
              and technical architecture to support and adapt to continual
              changes. TekEssence has gained a lot of experience in the areas of
              HMS - Hospital Management Systems, Electronic Health Record
              Systems, System Integration, and HIPAA Administrative
              Simplification Compliance under its HealthCare services.
            </p>
            <br />
            <br />
            <p>
              <span className="bold green">TekEssence</span> has many years of
              experience in all aspects of Revenue Cycle Management. Because of
              its relationship with multiple customers across all the states in
              the US, TekEssence has the experience of working with multiple
              billing software. TekEssence can bring in the domain expertise,
              tools, and services such as Integration services of Legacy and
              Latest technologies integration and analyze old Account
              Receivables using latest data analysis technologies like pattern
              matching. Using the latest technologies and techniques in A/R
              management makes the A/R process super efficient and gets the
              maximum return on investment of its resources for all the
              providers, imaging centers, billing companies and hospitals.
            </p>
            <br />
            <Link to="/contact" className="link horizontal--flex center">
              <p>Contact Us</p>
              <img src={go} alt="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Healthcare;
