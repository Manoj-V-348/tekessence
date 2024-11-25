import React from "react";

import "../index.css";
import "./Technology.css";

import Carousel from "../assets/images/technology/Technology.png";
import technology from "../assets/images/technology/technologyTxt.jpg";

function Technology() {
  return (
    <>
      <div className="technology--container">
        <div className="carousel technology--carousel">
          <h1 className="blue">Technology</h1>
          <img src={Carousel} alt="carousel" className="Carousel--image" />
        </div>

        <div className="technology--text--container horizontal--flex">
          <div className="operations--image--container horizontal--flex">
            <img src={technology} alt="operations" />
          </div>
          <div className="text--container vertical--flex">
            <p>
              Our technology solutions are a combination of cutting-edge
              software tools baked in our ecosystem labs, along with market
              leading platforms that have clear product gaps that need to be
              filled. Ultimately, the selection of a technology product is a
              two-fold bet - that it will enable a highly differentiated
              business solution, and yet must provide adequate risk mitigation
              in the face of unforeseen events. Through tekessence's unique
              solution based incubation model we are able to provide our
              technology teams the exposure they need to real-world business
              problems, and at the same time we are able to insulate our client
              partners from the vagaries of an ever shifting technology
              landscape.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Technology;
