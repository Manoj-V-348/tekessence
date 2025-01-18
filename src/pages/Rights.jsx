import React from "react";

import "../index.css";
import "./Rights.css";

import Carousel from "../assets/images/rights/Rights.png";
import RightsImg from "../assets/images/rights/security.jpg";
import RightsImg2 from "../assets/images/rights/rightsImg2.jpg";

function Rights() {
  return (
    <>
      <div className="rights--container">
        <div className="carousel rights--carousel">
          <h1 className="green">IP Rights</h1>
          <img src={Carousel} alt="carousel" className="Carousel--image" />
        </div>

        <div className="rights--text--container horizontal--flex">
          <div className="operations--image--container horizontal--flex">
            <img src={RightsImg} alt="rights" />
          </div>
          <div className="text--container vertical--flex">
            <p>
              Intelligent enterprises fundamentally trade in intellectual
              capital, and the nature of the global business models makes even
              more pronounced the need for formal structures for managing
              Intellectual Property of our clients, and of all our partners.
              <br />
              <br />
              On behalf of our enterprise customers we get and manage statements
              of specific IP rights of our technology providers. We monitor
              source code escrow accounts in the event that the younger
              technology providers in our network go through change of
              structure. We manage licensing models of various types to suit
              business needs - usage based, perpetual, or based on key metrics.
              We rationalize all of the above in the context of even our
              client's own intellectual property - bits and pieces of code and
              designs that may offer diamonds in the rough.
            </p>
          </div>
        </div>

        <div className="rights--text--container horizontal--flex rights--text--container2">
          <div className="operations--image--container horizontal--flex">
            <img src={RightsImg2} alt="rights" />
          </div>
          <div className="text--container vertical--flex">
            <p>
              In the global IP economy, it is one thing to have a unilateral
              viewpoint of IP rights, and another thing altogether to see it
              being realized.
              <br />
              <br />
              <span className="bold green">TekEssence</span> makes it a point to
              intimately know and enhance the social capital between us and the
              individuals behind the technology. Nothing else protects and
              enhances IP rights as a world moderated by interests that are well
              aligned.
              <br />
              <br />
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Rights;
