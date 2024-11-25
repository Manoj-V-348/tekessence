import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import "../index.css";

function Footer() {
  return (
    <>
      <footer className="horizontal--flex footer">
        <div className="quick--links vertical--flex">
          <p className="bold">Quick Links</p>
          <div className="footer--links vertical--flex">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="address">
          <p className="bold">Address</p>
          <p className="address--location">
            TekEssence Inc.,
            <br />
            Sunnywale, <br />
            California - 95085,
            <br /> Tel - 408-934-2100
          </p>
        </div>

        <div className="contact--form vertical--flex">
          <p className="bold">Quick Entry</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="name"
            className="name--area"
          />
          <textarea
            name=""
            id=""
            rows="4"
            className="message--area"
            placeholder="message"
          ></textarea>
          <button type="submit" className="submit">
            Submit
          </button>
        </div>
      </footer>

      <p className="copyright">
        Copyright@ 2024. <span className="underline">TekEssence, Inc.</span>.
        All rights reserved.
      </p>
    </>
  );
}

export default Footer;
