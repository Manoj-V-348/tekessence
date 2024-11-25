import React from "react";

import "../index.css";
import "./Operations.css";

import Carousel from "../assets/images/operations/Operations.png";
import operations from "../assets/images/operations/operationsText.jpg";

function Operations() {
  return (
    <>
      <div className="operations--container">
        <div className="carousel operations--carousel">
          <h1 className="blue">Operations</h1>
          <img src={Carousel} alt="carousel" className="Carousel--image" />
        </div>

        <div className="operations--text--container horizontal--flex center">
          <div className="operations--image--container horizontal--flex">
            <img src={operations} alt="operations" />
          </div>
          <div className="text--container vertical--flex">
            <p>
              <span className="bold green">TekEssence's</span> Project
              Management Office is run by a world-class team of experienced IT
              professionals who have been involved in multi-million dollar
              systems projects over many years. Predictability, quality,
              cost-effectiveness are some of their 24x7 watchwords. They have
              built and operated data centers with strong systems management
              tools that ensure reliability, fault-tolerance, and disaster-proof
              operations. <br />
              <br />
              As the world shifts to Cloud Computing paradigm the ability to
              leverage the public Cloud as well as integrate with private Clouds
              is a key skill into which we have also invested. This "Information
              as a Utility" business model affords our clients the full benefits
              of Cloud Computing without any compromise in quality of service
              that they have come to expect to run their core information
              systems - now increasingly shifting to disruptive Apps on mobile
              devices driven by entrepreneurs and corporate intrapreneurs.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Operations;
