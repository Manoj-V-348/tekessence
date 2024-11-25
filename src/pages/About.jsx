import React from "react";

import "../index.css";
import "./About.css";

import Carousel from "../assets/images/about/About.jpg";
import AboutImg from "../assets/images/about/aboutTxt.jpg";
import Oracle from "../assets/images/home/oracle.png";
import Cisco from "../assets/images/home/cisco.png";
import Dell from "../assets/images/home/dell.png";
import Microsoft from "../assets/images/home/microsoft.png";
import Lockheed from "../assets/images/home/lockheed.png";
import Tibco from "../assets/images/home/tibco.png";
import IBM from "../assets/images/home/ibm.png";
import synnex from "../assets/images/home/synnex.png";

function About() {
  return (
    <>
      <div className="about--container">
        <div className="carousel about--carousel">
          <h1 className="blue">About</h1>
          <img src={Carousel} alt="carousel" className="Carousel--image" />
        </div>

        <div className="technology--text--container horizontal--flex">
          <div className="operations--image--container horizontal--flex">
            <img src={AboutImg} alt="rights" />
          </div>
          <div className="text--container vertical--flex">
            <p>
              <span className="bold green">TekEssence</span> is a unique
              Innovation services firm that can multiple the enterprise value of
              a business, while lowering its non-core operating costs.
              <br />
              <br />
              Our team of entrepreneurs-in-residence helps you to analyze your
              business in the context of the industry and global macro-economic
              trends. We formulate a shared risk/reward business plan that has
              the optimum mix of Investment capital as well as "Innovation
              capital". We are experts in the strategic application of
              technology (information, industrial, etc.) and business social
              networks (supply, demand, etc.) to build breakthrough companies
              across various verticals & specialties.
              <br />
              <br />
            </p>
            <br />
          </div>
        </div>

        <p>
          <span className="bold green">TekEssence</span> is led by an
          experienced management team of entrepreneurs that have either been
          early employees or invested in startups that had successful exits to
          the companies below.
        </p>

        <div className="client--details--container vertical--flex center">
          <div className="horizontal--flex clients1">
            <div className="client">
              <img src={Oracle} alt="oracle" />
            </div>
            <div className="client">
              <img src={Cisco} alt="cisco" />
            </div>
            <div className="client">
              <img src={Dell} alt="dell" />
            </div>
            <div className="client">
              <img src={Microsoft} alt="microsoft" />
            </div>
          </div>

          <div className="horizontal--flex clients2">
            <div className="client">
              <img src={Lockheed} alt="Lockheed-martin" />
            </div>
            <div className="client">
              <img src={Tibco} alt="tibco" />
            </div>
            <div className="client">
              <img src={IBM} alt="ibm" />
            </div>
            <div className="client">
              <img src={synnex} alt="synnex" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
