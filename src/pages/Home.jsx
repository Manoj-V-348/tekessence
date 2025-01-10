import React from "react";

import "./Home.css";
import "../index.css";

import homeTextImg from "../assets/images/home/Home1.png";
import Oracle from "../assets/images/home/oracle.png";
import Cisco from "../assets/images/home/cisco.png";
import Dell from "../assets/images/home/dell.png";
import Microsoft from "../assets/images/home/microsoft.png";
import Lockheed from "../assets/images/home/lockheed.png";
import Tibco from "../assets/images/home/tibco.png";
import IBM from "../assets/images/home/ibm.png";
import synnex from "../assets/images/home/synnex.png";
import homeBg from "../assets/images/home/Home-Carousel.png";

function Home() {
  return (
    <>
      <div className="carousel home--carousel">
        <h1 className="green">Providers of Innovation Capital</h1>
        <p>
          TekEssence is a unique Innovation services firm that can multiple the
          enterprise value of a business, while lowering its non-core operating
          costs.
        </p>
        <img src={homeBg} alt="" />
      </div>

      <div className="home--text--container horizontal--flex center">
        <div className="image--container horizontal--flex">
          <img src={homeTextImg} alt="TekEssence" />
        </div>
        <div className="text--container vertical--flex">
          <p>
            <span className="bold green">TekEssence</span> is a provider of
            Innovation Capital, an advisory service that is revolutionary in the
            world of strategy consulting and private investments. We are
            transforming small & medium sized businesses in targeted industries
            - or divisions of large corporates - that are in the midst of great
            flux.
          </p>
          <br />
          <p>
            Our client partners are typically niche leaders in their industry
            segment who could be re-positioned to disrupt existing markets, and
            appreciate a committed partner to share in the risk/reward of a
            transformative venture. As outsiders we view the business through
            the impartial lens of continuous innovation. As insiders we take a
            hands-on approach to operating all non-core aspects of the business.
            As entrepreneurs we have a finger on the pulse of cutting edge
            technologies that can prove a differentiating edge to business
            functions.
          </p>
          <br />
          <p>
            As CxO's on demand, <span className="bold green">TekEssence</span>{" "}
            provides an integrated approach to strategy consulting, global
            operations, and technology incubation - an unparalleled service in
            the world of business transformation.
          </p>
        </div>
      </div>

      <div className="client--details--container vertical--flex center">
        <p className="bold green">
          Our management team members early worked companies
        </p>
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
    </>
  );
}

export default Home;
